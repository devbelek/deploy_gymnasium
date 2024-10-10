from django.contrib.auth.models import User
from loguru import logger
from django.db import models
from django.core.exceptions import ValidationError
from rest_framework import serializers, viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.shortcuts import get_object_or_404
from django.utils.translation import gettext_lazy as _
import logging
from django.db import models
from django.utils.translation import gettext_lazy as _
from PIL import Image
import io
from django.core.files.base import ContentFile
from django.db.models.signals import post_save
from django.dispatch import receiver

logger = logging.getLogger(__name__)


def validate_file_extension(value):
    if not value.name.endswith('.pdf'):
        raise ValidationError("Можно загружать только файлы в формате PDF.")


class CompressedImageField(models.ImageField):
    def __init__(self, *args, **kwargs):
        self.max_width = kwargs.pop('max_width', 1920)
        self.max_height = kwargs.pop('max_height', 1080)
        self.quality = kwargs.pop('quality', 85)
        super().__init__(*args, **kwargs)

    def pre_save(self, model_instance, add):
        file = super().pre_save(model_instance, add)
        if file and hasattr(file, 'image'):
            image = Image.open(file)
            image.thumbnail((self.max_width, self.max_height), Image.LANCZOS)
            output = io.BytesIO()
            image.save(output, format='JPEG', quality=self.quality, optimize=True)
            output.seek(0)
            new_content = ContentFile(output.read())
            new_content.name = file.name
            setattr(model_instance, self.attname, new_content)
        return file


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, unique=True, related_name='profile')
    avatar = CompressedImageField(upload_to='avatars/', blank=True, verbose_name='Аватар')

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name = "Личные кабинеты пользователей"
        verbose_name_plural = "Личные кабинеты пользователей"

    def save(self, *args, **kwargs):
        if not self.pk:
            logger.info(f"Создание нового профиля пользователя: {self.user.username}")
        else:
            logger.info(f"Обновление профиля пользователя: {self.user.username}")
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        logger.info(f"Удаление профиля пользователя: {self.user.username}")
        super().delete(*args, **kwargs)


class Comment(models.Model):
    news = models.ForeignKey('main.News', on_delete=models.CASCADE, related_name='comments', verbose_name=_('Связка с "Новости"'), null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name=_('Автор'))
    text = models.TextField(verbose_name=_('Комментарий'))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('Дата создания'))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_('Дата обновления'))
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE, related_name='replies')
    depth = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name = _("Комментарий к посту")
        verbose_name_plural = _("Комментарии к постам")
        ordering = ['-created_at']

    def __str__(self):
        return f'Комментарий от {self.author.username}'

    def save(self, *args, **kwargs):
        if self.parent:
            self.depth = self.parent.depth + 1
            if self.depth > 2:
                raise ValidationError("Превышена максимальная глубина комментариев")
        is_new = self.pk is None
        super().save(*args, **kwargs)
        if is_new:
            logger.info(f"Создание комментария от пользователя: {self.author.username}")
        else:
            logger.info(f"Обновление комментария (ID: {self.pk}) от пользователя: {self.author.username}")

    def delete(self, *args, **kwargs):
        logger.info(f"Удаление комментария (ID: {self.pk}) от пользователя: {self.author.username}")
        super().delete(*args, **kwargs)


class CommentReply(models.Model):
    parent_comment = models.ForeignKey(Comment, related_name='comment_replies', on_delete=models.CASCADE, verbose_name='Комментарий', null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Автор')
    text = models.TextField(verbose_name='Ответ')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')

    class Meta:
        verbose_name = "Ответ на комментарий"
        verbose_name_plural = "Ответы на комментарии"

    def __str__(self):
        return f'Ответ от {self.author.username}'

    def save(self, *args, **kwargs):
        if not self.pk:
            logger.info(f"Создание ответа от пользователя: {self.author.username} на комментарий ID: {self.parent_comment.id}")
        else:
            logger.info(f"Обновление ответа (ID: {self.pk}) от пользователя: {self.author.username}")
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        logger.info(f"Удаление ответа (ID: {self.pk}) от пользователя: {self.author.username}")
        super().delete(*args, **kwargs)


class Like(models.Model):
    comment = models.ForeignKey(Comment, related_name='likes', on_delete=models.CASCADE, verbose_name=_('Комментарий'))
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name=_('Пользователь'))

    class Meta:
        unique_together = ('comment', 'user')
        verbose_name = _("Лайк")
        verbose_name_plural = _("Лайки")

    def __str__(self):
        return f'Лайк от {self.user.username} на комментарий {self.comment.id}'

    def save(self, *args, **kwargs):
        is_new = self.pk is None
        super().save(*args, **kwargs)
        if is_new:
            logger.info(f"Пользователь {self.user.username} поставил лайк на комментарий ID: {self.comment.id}")

    def delete(self, *args, **kwargs):
        logger.info(f"Пользователь {self.user.username} удалил лайк с комментария ID: {self.comment.id}")
        super().delete(*args, **kwargs)


class Donation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='donations', verbose_name='Пользователь')
    amount = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Сумма(сом)')
    date = models.DateTimeField(auto_now_add=True, verbose_name='Дата')
    comment = models.CharField(max_length=300, blank=True, null=True)
    confirmation_file = models.FileField(upload_to='checks/%Y/%m/%d/', blank=False, validators=[validate_file_extension], verbose_name='Квитанция о переводе')
    requisite = models.CharField(max_length=200, blank=False, verbose_name='Реквизиты')
    is_verified = models.BooleanField(default=False, verbose_name='Статус подтверждения')
    verification_message = models.TextField(blank=True)

    def __str__(self):
        return f"{self.user.username} - {self.amount} - {self.date} - {self.requisite}"

    class Meta:
        verbose_name = "Не подтвержденные переводы средств"
        verbose_name_plural = "Не подтвержденные переводы средств"

    def save(self, *args, **kwargs):
        if not self.pk:
            logger.info(f"Пользователь {self.user.username} сделал пожертвование на сумму {self.amount} сом.")
        else:
            logger.info(f"Обновление пожертвования ID: {self.pk} от пользователя {self.user.username}. Статус подтверждения: {self.is_verified}")
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        logger.info(f"Удаление пожертвования ID: {self.pk} от пользователя {self.user.username}")
        super().delete(*args, **kwargs)


class ConfirmedDonation(models.Model):
    donation = models.OneToOneField(Donation, on_delete=models.CASCADE, related_name='confirmed_donation', verbose_name='Перевод')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='confirmed_donations', verbose_name='Пользователь')
    date = models.DateTimeField(auto_now_add=True, verbose_name='Дата')
    comment = models.CharField(max_length=255, blank=True, null=True, verbose_name='Комментарий')

    def __str__(self):
        return f"{self.user.username} - {self.donation.amount} - {self.date}"

    @property
    def amount(self):
        return self.donation.amount

    class Meta:
        verbose_name = "Подтвержденные переводы средств"
        verbose_name_plural = "Подтвержденные переводы средств"

    def save(self, *args, **kwargs):
        if not self.pk:
            logger.info(f"Пожертвование ID: {self.donation.id} пользователя {self.user.username} подтверждено.")
        else:
            logger.info(f"Обновление подтвержденного пожертвования ID: {self.pk} пользователя {self.user.username}")
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        logger.info(f"Удаление подтвержденного пожертвования ID: {self.pk} пользователя {self.user.username}")
        super().delete(*args, **kwargs)
