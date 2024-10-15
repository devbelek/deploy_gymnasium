from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import UserProfileDetail, CommentViewSet, CommentReplyViewSet, LikeViewSet, DonationViewSet, \
    DonationRequisiteViewSet
from . import views
from .views import UserProfileDetailView

router = DefaultRouter()
router.register(r'comments', CommentViewSet)
router.register(r'comment_replies', CommentReplyViewSet)
router.register(r'likes', LikeViewSet)
router.register(r'donations', DonationViewSet)
router.register(r'donations-requisite', DonationRequisiteViewSet)


urlpatterns = [
    path('user-info/', views.user_info, name='user_info'),
    path('profile/<str:user__username>/', UserProfileDetailView.as_view(), name='user-profile-detail'),

    path('accounts/user/', views.user_auth_status, name='user_auth_status'),
    path('', include(router.urls)),
    path('profile/', UserProfileDetail.as_view(), name='user-profile'),

    path('comments/<int:comment_pk>/replies/<int:pk>/', views.CommentViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='comment-reply-detail'),
    path('news/<int:news_id>/comments/', views.CommentViewSet.as_view({'get': 'list', 'post': 'create'}), name='news-comments'),
    path('comments/<int:pk>/reply/', views.CommentViewSet.as_view({'post': 'reply'}), name='comment-reply'),
    path('comments/like/', views.CommentViewSet.as_view({'post': 'like'}), name='comment-like'),
]