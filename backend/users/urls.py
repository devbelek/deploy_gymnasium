from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import UserProfileDetail, CommentViewSet, CommentReplyViewSet, LikeViewSet, DonationsViewSet, \
    ConfirmedDonationViewSet, RegisterView


router = DefaultRouter()
router.register(r'comments', CommentViewSet)
router.register(r'comment_replies', CommentReplyViewSet)
router.register(r'likes', LikeViewSet)
router.register(r'donations', DonationsViewSet)
router.register(r'confirmed_donations', ConfirmedDonationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('profile/', UserProfileDetail.as_view(), name='user-profile'),
    path('news/<int:pk>/comments/',
         CommentViewSet.as_view({'get': 'get_comments_by_news', 'post': 'create_comment_for_news'}),
         name='news-comments'),
    path('register/', RegisterView.as_view(), name='register'),
]
