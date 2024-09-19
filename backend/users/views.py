from rest_framework.views import APIView
from .models import UserProfile, Comment, CommentReply, Like, Donation, ConfirmedDonation
from .serializers import (
    UserProfileSerializers, CommentSerializers, CommentReplySerializers,
    LikeSerializers, RegisterSerializer, DonationSerializer, ConfirmedDonationSerializer
)
from rest_framework import viewsets, generics, status
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, AllowAny
from rest_framework.response import Response
from .tasks import verify_receipt
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


class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        logger.info(f"Попытка регистрации нового пользователя с данными: {request.data}")
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            logger.info(f"Пользователь {serializer.data.get('username')} успешно зарегистрирован.")
            return Response({"message": "Пользователь успешно создан!"}, status=status.HTTP_201_CREATED)
        logger.warning(f"Ошибка регистрации пользователя: {serializer.errors}")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DonationsViewSet(viewsets.ModelViewSet):
    queryset = Donation.objects.all().order_by('-date')
    serializer_class = DonationSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def list(self, request, *args, **kwargs):
        logger.info(f"Пользователь {request.user.username} запросил список пожертвований.")
        return super().list(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        logger.info(f"Пользователь {request.user.username} инициировал создание пожертвования.")
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        donation = self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        logger.info(f"Пожертвование ID: {donation.id} создано пользователем {request.user.username}.")
        return Response({"message": "Чек принят на проверку"}, status=status.HTTP_202_ACCEPTED, headers=headers)

    def perform_create(self, serializer):
        donation = serializer.save(user=self.request.user)
        if donation.confirmation_file:
            logger.info(f"Запуск задачи проверки чека для пожертвования ID: {donation.id}")
            verify_receipt.delay(donation.id)
        return donation

    def update(self, request, *args, **kwargs):
        logger.info(f"Пользователь {request.user.username} пытается обновить пожертвование ID: {kwargs.get('pk')}")
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        logger.info(f"Пользователь {request.user.username} пытается удалить пожертвование ID: {kwargs.get('pk')}")
        return super().destroy(request, *args, **kwargs)


class ConfirmedDonationViewSet(viewsets.ModelViewSet):
    queryset = ConfirmedDonation.objects.all().order_by('-date')
    serializer_class = ConfirmedDonationSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def list(self, request, *args, **kwargs):
        logger.info(f"Пользователь {request.user.username} запросил список подтвержденных пожертвований.")
        return super().list(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        logger.info(f"Пользователь {request.user.username} инициировал подтверждение пожертвования.")
        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        logger.info(f"Пользователь {request.user.username} обновляет подтвержденное пожертвование ID: {kwargs.get('pk')}")
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        logger.info(f"Пользователь {request.user.username} пытается удалить подтвержденное пожертвование ID: {kwargs.get('pk')}")
        return super().destroy(request, *args, **kwargs)


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