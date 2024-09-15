from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import UserProfileDetail, CommentViewSet, CommentReplyViewSet, LikeViewSet, DonationsViewSet, \
    ConfirmedDonationViewSet, RegisterView
from . import views

router = DefaultRouter()
router.register(r'comments', CommentViewSet)
router.register(r'comment_replies', CommentReplyViewSet)
router.register(r'likes', LikeViewSet)
router.register(r'donations', DonationsViewSet)
router.register(r'confirmed_donations', ConfirmedDonationViewSet)


urlpatterns = [
    path('accounts/user/', views.user_auth_status, name='user_auth_status'),
    path('', include(router.urls)),
    path('profile/', UserProfileDetail.as_view(), name='user-profile'),
    path('news/<int:pk>/comments/',
         CommentViewSet.as_view({'get': 'get_comments_by_news', 'post': 'create_comment_for_news'}),
         name='news-comments'),
    path('comments/<int:pk>/reply/', CommentViewSet.as_view({'post': 'reply'}), name='comment-reply'),
    path('comment_replies/<int:reply_id>/',
         CommentReplyViewSet.as_view({'patch': 'update', 'delete': 'destroy'}), name='comment-reply-actions'),
    path('register/', RegisterView.as_view(), name='register'),
    path('likes/toggle/', LikeViewSet.as_view({'post': 'toggle'}), name='toggle-like'),
    path('likes/status/', LikeViewSet.as_view({'get': 'status'}), name='like-status'),
]