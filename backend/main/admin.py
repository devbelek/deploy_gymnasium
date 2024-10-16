from django.contrib import admin
from .models import *
from modeltranslation.admin import TranslationAdmin
from .utils import generate_csv_file, generate_excel_file

admin.site.register(Graduates)
admin.site.register(SchoolParliament)
admin.site.register(GimnasiumClass)
admin.site.register(Olympians)


@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('title', 'youtube_id')
    search_fields = ('title', 'description', 'youtube_id')


@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ('title', 'image', 'content')


@admin.register(SuccessfulGraduates)
class SuccessfulGraduatesAdmin(TranslationAdmin):
    list_display = ("content",)


@admin.register(News)
class NewsAdmin(TranslationAdmin):
    list_display = ('author', 'created_at', 'display_description', 'display_content')
    fieldsets = []


@admin.register(Students)
class StudentsAdmin(admin.ModelAdmin):
    list_display = ("name", "surname", "school_class")
    actions = ['download_csv', 'download_excel']

    def download_csv(self, request, queryset):
        return generate_csv_file(queryset)

    download_csv.short_description = 'Скачать список студентов в формате CSV'

    def download_excel(self, request, queryset):
        return generate_excel_file(queryset)

    download_excel.short_description = 'Скачать список студентов в формате Excel'


@admin.register(Teachers)
class TeachersAdmin(TranslationAdmin):
    list_display = ('get_full_name', 'subject', 'education', 'successes')
    fieldsets = [
        # ('Русский перевод', {
        #     'fields': ['subject', 'education', 'successes']
        # }),
        # ('Кыргызский перевод', {
        #     'fields': ['subject_ky', 'education_ky', 'successes_ky']
        # })
    ]

    def get_full_name(self, obj):
        return f"{obj.name} {obj.surname} {obj.last_name}"
    get_full_name.short_description = 'ФИО'
