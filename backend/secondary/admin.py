from django.contrib import admin
from modeltranslation.admin import TranslationAdmin

from .models import AdministratorTypes, NameOfGrades, NamesOfOlympia, AboutUs, Contacts

admin.site.register(NameOfGrades)
admin.site.register(AdministratorTypes)
admin.site.register(AboutUs)
admin.site.register(Contacts)


@admin.register(NamesOfOlympia)
class NamesOfOlympiaAdmin(TranslationAdmin):
    list_display = ('choosing', )
