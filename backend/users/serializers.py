from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile, Comment, CommentReply, Like, ConfirmedDonation, Donation
from django.contrib.auth import get_user_model

User = get_user_model()


class UserProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = UserProfile
        fields = ['username', 'avatar']


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password')

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user


class DonationSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Donation
        fields = ['id', 'user', 'amount', 'date', 'confirmation_file', 'comment', 'requisite', 'is_verified']
        read_only_fields = ['user', 'is_verified']


class ConfirmedDonationSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    amount = serializers.ReadOnlyField(source='donation.amount')

    class Meta:
        model = ConfirmedDonation
        fields = ['id', 'user', 'amount', 'date', 'comment', 'requisite']


class UserProfileSerializers(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = UserProfile
        exclude = ['id', 'user']


class CommentReplySerializers(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    parent_comment = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = CommentReply
        fields = ['id', 'author', 'parent_comment', 'text', 'created_at', 'updated_at']
        read_only_fields = ['id', 'author', 'parent_comment', 'created_at', 'updated_at']

    def create(self, validated_data):
        parent_comment = self.context['parent_comment']
        validated_data['parent_comment'] = parent_comment
        reply = CommentReply.objects.create(**validated_data)
        return reply

    def update(self, instance, validated_data):
        instance.text = validated_data.get('text', instance.text)
        instance.save()
        return instance


class CommentSerializers(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    likes_count = serializers.SerializerMethodField()
    is_liked = serializers.SerializerMethodField()
    replies = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = ['id', 'author', 'text', 'created_at', 'updated_at', 'likes_count', 'is_liked', 'replies']

    def get_likes_count(self, obj):
        return obj.likes.count()

    def get_is_liked(self, obj):
        user = self.context['request'].user
        return user.is_authenticated and obj.likes.filter(user=user).exists()

    def get_replies(self, obj):
        if obj.depth < 2:
            replies = obj.replies.all()
            return CommentSerializers(replies, many=True, context=self.context).data
        return []


class LikeSerializers(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Like
        fields = ['id', 'user']
