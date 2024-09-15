from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile, Comment, CommentReply, Like, ConfirmedDonation, Donation
from django.contrib.auth import get_user_model

User = get_user_model()


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
        fields = ['id', 'user', 'amount', 'date', 'confirmation_file', 'comment', 'is_verified']
        read_only_fields = ['user', 'is_verified']


class ConfirmedDonationSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    amount = serializers.ReadOnlyField(source='donation.amount')

    class Meta:
        model = ConfirmedDonation
        fields = ['id', 'user', 'amount', 'date', 'comment']


class UserProfileSerializers(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = UserProfile
        exclude = ['id']


class CommentReplySerializers(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = CommentReply
        fields = ['id', 'parent_comment', 'author', 'text', 'created_at']

    def create(self, validated_data):
        parent_comment = validated_data.pop('parent_comment')
        reply = CommentReply.objects.create(parent_comment=parent_comment, **validated_data)
        return reply


class CommentSerializers(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    replies = CommentReplySerializers(many=True, read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'author', 'text', 'created_at', 'updated_at', 'replies']


class LikeSerializers(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Like
        fields = ['id', 'user']
