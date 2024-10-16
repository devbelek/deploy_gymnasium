from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'students', StudentsViewSet)
router.register(r'successful-graduates', SuccessfulGraduatesViewSet)
router.register(r'graduates', GraduatesViewSet)
router.register(r'news', NewsViewSet)
router.register(r'gallery', GalleryViewSet)
router.register(r'teachers', TeachersViewSet)
router.register(r'school-parliament', SchoolParliamentViewSet)
router.register(r'gimnasium-class', GimnasiumClassViewSet)
router.register(r'olympians', OlympiansViewSet)
router.register(r'videos', VideoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]