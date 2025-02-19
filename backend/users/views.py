from rest_framework.views import APIView
from .models import UserProfile, Comment, CommentReply, Like, Donation, DonationRequisite
from .serializers import (
    UserProfileSerializers, CommentSerializers, CommentReplySerializers,
    LikeSerializers, RegisterSerializer, DonationSerializer, DonationRequisiteSerializer
)
from rest_framework import viewsets, generics, status
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, AllowAny
from rest_framework.response import Response
from loguru import logger
from django.core.exceptions import PermissionDenied
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from main.models import News
from django.http import JsonResponse
from django.views.decorators.http import require_GET
from django.contrib.auth.decorators import login_required
from django.middleware.csrf import get_token
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import UserProfile
from .serializers import UserProfileSerializer

User = get_user_model()


@api_view(['GET', 'POST'])
def user_info(request):
    if request.method == 'GET':
        username = request.GET.get('username')
    else:
        username = request.data.get('username')

    if not username:
        return Response({'error': 'Username is required'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.get(username=username)
        avatar_url = request.build_absolute_uri(user.profile.avatar.url) if user.profile.avatar else None
        return Response({
            'username': user.username,
            'avatar': avatar_url,
        })
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)


@require_GET
def user_auth_status(request):
    if request.user.is_authenticated:
        return JsonResponse({
            'isAuthenticated': True,
            'username': request.user.username,
            'csrf_token': get_token(request)
        })
    else:
        return JsonResponse({
            'isAuthenticated': False,
            'username': None,
            'csrf_token': get_token(request)
        })


class DonationRequisiteViewSet(viewsets.ModelViewSet):
    queryset = DonationRequisite.objects.all()
    serializer_class = DonationRequisiteSerializer


class DonationViewSet(viewsets.ModelViewSet):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer


class UserProfileDetailView(generics.RetrieveAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    lookup_field = 'user__username'

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class UserProfileDetail(generics.RetrieveUpdateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializers
    permission_classes = [IsAuthenticated]

    def get_object(self):
        logger.info(f"Пользователь {self.request.user.username} запрашивает свой профиль.")
        return self.request.user.profile

    def perform_update(self, serializer):
        logger.info(f"Пользователь {self.request.user.username} обновляет свой профиль.")
        serializer.save()

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.filter(parent=None)
    serializer_class = CommentSerializers
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        news_id = self.kwargs.get('news_id')
        if news_id:
            return Comment.objects.filter(news_id=news_id, parent=None)
        return Comment.objects.filter(parent=None)

    def get_object(self):
        queryset = Comment.objects.all()
        comment_pk = self.kwargs.get('comment_pk')
        pk = self.kwargs.get('pk')
        if comment_pk:
            return get_object_or_404(queryset, parent_id=comment_pk, pk=pk)
        return get_object_or_404(queryset, pk=pk)

    def perform_create(self, serializer):
        news_id = self.kwargs.get('news_id')
        news = get_object_or_404(News, pk=news_id)
        serializer.save(author=self.request.user, news=news)

    @action(detail=True, methods=['post'])
    def reply(self, request, pk=None):
        parent_comment = self.get_object()
        if parent_comment.depth >= 2:
            return Response({"detail": "Maximum comment depth exceeded"}, status=status.HTTP_400_BAD_REQUEST)
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save(author=request.user, news=parent_comment.news, parent=parent_comment, depth=parent_comment.depth + 1)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def like(self, request):
        comment_id = request.data.get('comment_id')
        comment = get_object_or_404(Comment, pk=comment_id)
        like, created = Like.objects.get_or_create(user=request.user, comment=comment)
        if not created:
            like.delete()
            return Response({"detail": "Like removed"}, status=status.HTTP_200_OK)
        return Response({"detail": "Like added"}, status=status.HTTP_201_CREATED)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.author != request.user:
            return Response({"detail": "You don't have permission to edit this comment."}, status=status.HTTP_403_FORBIDDEN)
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.author != request.user:
            return Response({"detail": "You don't have permission to delete this comment."}, status=status.HTTP_403_FORBIDDEN)
        return super().destroy(request, *args, **kwargs)


class CommentReplyViewSet(viewsets.ModelViewSet):
    queryset = CommentReply.objects.all()
    serializer_class = CommentReplySerializers
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        comment_id = self.kwargs.get('comment_pk')
        comment = get_object_or_404(Comment, pk=comment_id)
        serializer.save(author=self.request.user, parent_comment=comment)
        logger.info(f"Пользователь {self.request.user.username} создал ответ ID: {serializer.instance.id} на комментарий ID: {comment.id}")

    def perform_destroy(self, instance):
        if instance.author == self.request.user:
            logger.info(f"Пользователь {self.request.user.username} удалил ответ ID: {instance.id}")
            instance.delete()
        else:
            logger.warning(f"Пользователь {self.request.user.username} попытался удалить чужой ответ ID: {instance.id}")
            raise PermissionDenied("Вы не можете удалить этот ответ")

    def perform_update(self, serializer):
        if self.get_object().author == self.request.user:
            logger.info(f"Пользователь {self.request.user.username} обновил ответ ID: {self.get_object().id}")
            serializer.save()
        else:
            logger.warning(f"Пользователь {self.request.user.username} попытался обновить чужой ответ ID: {self.get_object().id}")
            raise PermissionDenied("Вы не можете редактировать этот ответ")


class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializers
    permission_classes = [IsAuthenticatedOrReadOnly]

    @action(detail=False, methods=['post'])
    def toggle(self, request):
        comment_id = request.data.get('comment_id')
        comment = get_object_or_404(Comment, pk=comment_id)

        like, created = Like.objects.get_or_create(user=request.user, comment=comment)

        if not created:
            like.delete()
            return Response({"detail": "Like removed"}, status=status.HTTP_200_OK)

        return Response({"detail": "Like added"}, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['get'])
    def status(self, request):
        comment_id = request.query_params.get('comment_id')
        comment = get_object_or_404(Comment, pk=comment_id)

        like_exists = Like.objects.filter(user=request.user, comment=comment).exists()

        return Response({"is_liked": like_exists})