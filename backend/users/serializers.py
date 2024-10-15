from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile, Comment, CommentReply, Like, Donation, DonationRequisite
from django.contrib.auth import get_user_model

User = get_user_model()


class UserProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')

    class Meta:
        model = UserProfile
        fields = ['username', 'avatar']

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', None)
        if user_data:
            user = instance.user
            user.username = user_data.get('username', user.username)
            user.save()
        return super().update(instance, validated_data)


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


class DonationRequisiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonationRequisite
        fields = '__all__'


class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = '__all__'


class UserProfileSerializers(serializers.ModelSerializer):
    user = serializers.CharField(source='user.username')

    class Meta:
        model = UserProfile
        fields = ['user', 'avatar']

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', None)
        if user_data:
            user = instance.user
            user.username = user_data.get('username', user.username)
            user.save()
        return super().update(instance, validated_data)


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