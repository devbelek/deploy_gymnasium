import os
from pathlib import Path
from dotenv import load_dotenv
import sys
from .jazzmin_settings import JAZZMIN_SETTINGS, JAZZMIN_UI_TWEAKS
from celery.schedules import crontab
from logging_config import logger
import logging_config

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent

sys.path.append(str(BASE_DIR))

SECRET_KEY = os.environ.get('SECRET_KEY')

DEBUG = os.environ.get('DEBUG')

ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', '').split(',')

JAZZMIN_SETTINGS = JAZZMIN_SETTINGS
JAZZMIN_UI_TWEAKS = JAZZMIN_UI_TWEAKS

INSTALLED_APPS = [
    'jazzmin',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.google',
    'modeltranslation',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    'django_celery_beat',
    'main',
    'ckeditor',
    'users',
    'rest_framework',
    'djoser',
    'drf_yasg',
    'django_filters',
    'secondary',
    'corsheaders',
]

SITE_ID = 1

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'allauth.account.middleware.AccountMiddleware',
]

ROOT_URLCONF = 'Gimnasium.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'Gimnasium.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('POSTGRES_DB'),
        'USER': os.environ.get('POSTGRES_USER'),
        'PASSWORD': os.environ.get('POSTGRES_PASSWORD'),
        'HOST': 'db',
        'PORT': 5432,
    }
    # 'default': {
    #     'ENGINE': 'django.db.backends.sqlite3',
    #     'NAME': BASE_DIR / 'db.sqlite3',
    # }
}

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator', },
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator', },
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator', },
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator', },
]

CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': [
            ['Format', 'Font', 'FontSize', 'Bold', 'Italic', 'Underline', '-',
             'NumberedList', 'BulletedList', '-', 'JustifyLeft', 'JustifyCenter',
             'JustifyRight', 'JustifyBlock', 'Image', 'Link', 'Unlink', 'Table',
             'Source', 'Maximize'],
        ],
        'width': 'auto',
        'height': '200px',
        'toolbarCanCollapse': True,
        'uiColor': '#f0f0f0',
        'removePlugins': 'elementspath,wordcount',  # добавлен wordcount
        'extraPlugins': 'font,maximize',
        'fontSize_sizes': (
            '8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;'
            '20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px'
        ),
        'font_names': (
            'Arial/Arial, Helvetica, sans-serif;'
            'Times New Roman/Times New Roman, Times, serif;'
            'Verdana'
        ),
        'removeButtons': '',  # удалены все ограничения на кнопки
        'allowedContent': True,  # разрешает любой контент
        'enterMode': 2,  # использует <br> вместо <p>
        'forcePasteAsPlainText': False,  # позволяет вставлять форматированный текст
    },
}

CKEDITOR_UPLOAD_PATH = "uploads/"
CKEDITOR_IMAGE_BACKEND = "pillow"

LANGUAGE_CODE = 'ru'
TIME_ZONE = 'Asia/Bishkek'
USE_I18N = True
USE_L10N = True
USE_TZ = True

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),
]

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

LOCALE_PATHS = [BASE_DIR / 'locale/']

LANGUAGES = (('ky', 'Kyrgyzstan'), ('ru', 'Russia'))
MODELTRANSLATION_LANGUAGES = ('ky', 'ru')
MODELTRANSLATION_DEFAULT_LANGUAGE = 'ky'

AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend',
]

LOGIN_REDIRECT_URL = '/'
LOGOUT_REDIRECT_URL = '/'
LOGIN_URL = '/admin/login/'
ACCOUNT_SIGNUP_REDIRECT_URL = '/accounts/login/'
ACCOUNT_EMAIL_CONFIRMATION_ANONYMOUS_REDIRECT_URL = '/accounts/login/'
ACCOUNT_EMAIL_CONFIRMATION_AUTHENTICATED_REDIRECT_URL = '/profile/'
ACCOUNT_ALLOW_PASSWORD_RESET = True
ACCOUNT_PASSWORD_RESET_TIMEOUT = 3600

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST_USER = os.getenv('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = os.getenv('EMAIL_HOST_PASSWORD')

ADMINS = [('admin', 'belekasrarov10@gmail.com')]
MANAGERS = ADMINS

ACCOUNT_EMAIL_CONFIRMATION_TEMPLATE = 'account/email_confirm.html'
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_EMAIL_VERIFICATION = 'mandatory'
ACCOUNT_RATE_LIMITS = {
    'login_failed': '5/5m',
    'login': '20/1h',
    'signup': '5/5m',
}

SOCIALACCOUNT_PROVIDERS = {
    "google": {
        "SCOPE": ["profile", 'email'],
        "AUTH_PARAMS": {"access_type": "offline"}
    }
}

REST_FRAMEWORK = {
    'DEFAULT_FILTER_BACKENDS': [
        'django_filters.rest_framework.DjangoFilterBackend',
        'rest_framework.filters.SearchFilter',
        'rest_framework.filters.OrderingFilter',
    ],
    'DEFAULT_PERMISSION_CLASSES': ['rest_framework.permissions.IsAuthenticatedOrReadOnly', ],
    'DEFAULT_PARSER_CLASSES': [
        'rest_framework.parsers.JSONParser',
        'rest_framework.parsers.FormParser',
        'rest_framework.parsers.MultiPartParser',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
        'rest_framework.throttling.UserRateThrottle'
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': '500/day',
        'user': '5000/day'
    }
}

SOCIALACCOUNT_ADAPTER = 'users.signals.MySocialAccountAdapter'
ACCOUNT_ADAPTER = 'users.adapters.MyAccountAdapter'

# CELERY_BROKER_URL = os.environ.get('REDIS_URL')
# CELERY_RESULT_BACKEND = os.environ.get('REDIS_URL')
#
# CELERY_ACCEPT_CONTENT = ['json']
# CELERY_TASK_SERIALIZER = 'json'
# CELERY_RESULT_SERIALIZER = 'json'
# CELERY_TIMEZONE = 'Asia/Bishkek'

SESSION_COOKIE_SECURE = True
SESSION_COOKIE_SAMESITE = 'Lax'

CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOWED_ORIGINS = os.environ.get('CORS_ALLOWED_ORIGINS', '').split(',')
CORS_ALLOW_METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']
CORS_ALLOW_HEADERS = [
    'cookie', 'x-csrftoken', 'content-type', 'accept', 'origin',
    'authorization', 'x-requested-with', 'access-control-request-headers',
    'access-control-request-method',
]

CSRF_TRUSTED_ORIGINS = os.environ.get('CSRF_TRUSTED_ORIGINS', '').split(',')
CSRF_COOKIE_HTTPONLY = False

CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": os.environ.get('CACHE_LOCATION'),
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        }
    }
}
# CELERY_BEAT_SCHEDULER = 'django_celery_beat.schedulers:DatabaseScheduler'
# CELERY_BEAT_SCHEDULE = {
#     'delete_old_media_files': {
#         'task': 'users.tasks.delete_old_media_files',
#         'schedule': crontab(minute='*'),
#     }
# }

CACHE_TTL = 60 * 1

if DEBUG:
    STATICFILES_DIRS = [os.path.join(BASE_DIR, "static")]
else:
    STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")
