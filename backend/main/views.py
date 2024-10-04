from rest_framework import viewsets, filters
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from .filters import StudentsFilter, GraduatesFilter
from .models import *
from .serializers import *
from loguru import logger
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django.conf import settings
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from secondary.models import NamesOfOlympia
from django.db.models import Count


class CachedViewSetMixin:
    @method_decorator(cache_page(settings.CACHE_TTL))
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)


class VideoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer


class BaseViewSet(CachedViewSetMixin, viewsets.ModelViewSet):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]

    def list(self, request, *args, **kwargs):
        logger.info(f"Запрос списка объектов {self.__class__.__name__}")
        return super().list(request, *args, **kwargs)

    def retrieve(self, request, *args, **kwargs):
        logger.info(f"Запрос объекта {self.__class__.__name__} с pk={kwargs.get('pk')}")
        return super().retrieve(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        logger.info(f"Создание нового объекта {self.__class__.__name__}")
        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        logger.info(f"Обновление объекта {self.__class__.__name__} с pk={kwargs.get('pk')}")
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        logger.info(f"Удаление объекта {self.__class__.__name__} с pk={kwargs.get('pk')}")
        return super().destroy(request, *args, **kwargs)


class StudentRelatedViewSet(BaseViewSet):
    filterset_class = StudentsFilter
    search_fields = ['name', 'surname', 'last_name']
    ordering_fields = ['name', 'surname']


class SchoolParliamentViewSet(BaseViewSet):
    queryset = SchoolParliament.objects.select_related('type_of_administrator').prefetch_related('student')
    serializer_class = SchoolParliamentSerializer


class GimnasiumClassViewSet(BaseViewSet):
    queryset = GimnasiumClass.objects.select_related('student', 'name_of_grade')
    serializer_class = GimnasiumClassSerializer


class StudentsViewSet(StudentRelatedViewSet):
    queryset = Students.objects.select_related('school_class', 'olympian_status',
                                               'administrator_status').prefetch_related('classroom_teacher')
    serializer_class = StudentsSerializer
    filterset_fields = ['school_class__grade', 'school_class__parallel']


class OlympiansViewSet(BaseViewSet):
    queryset = Olympians.objects.select_related('student', 'name_of_olympia')
    serializer_class = OlympiansSerializer

    @action(detail=False, methods=['get'], url_path='olymp_categories/(?P<category_id>\d+)')
    def by_category(self, request, category_id=None):
        category = get_object_or_404(NamesOfOlympia, id=category_id)
        olympians = self.queryset.filter(name_of_olympia=category)
        serializer = self.get_serializer(olympians, many=True)
        return Response(serializer.data)


class SuccessfulGraduatesViewSet(BaseViewSet):
    queryset = SuccessfulGraduates.objects.select_related('graduate')
    serializer_class = SuccessfulGraduatesSerializer


class GraduatesViewSet(BaseViewSet):
    queryset = Graduates.objects.select_related('kl_rukovoditel')
    serializer_class = GraduatesSerializer
    filterset_class = GraduatesFilter


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.select_related('author').annotate(comments_count=Count('comments'))
    serializer_class = NewsSerializer


class GalleryViewSet(BaseViewSet):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer


class TeachersViewSet(BaseViewSet):
    queryset = Teachers.objects.all()
    serializer_class = TeachersSerializer
