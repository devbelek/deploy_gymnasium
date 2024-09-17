from modeltranslation.translator import register, TranslationOptions
from .models import (
    SuccessfulGraduates,
    News,
    Teachers,
    OldTeachers,
)
from secondary.models import NamesOfOlympia


@register(NamesOfOlympia)
class ThanksNoteFromGraduatesTranslationOptions(TranslationOptions):
    fields = ('choosing', )


@register(SuccessfulGraduates)
class SuccessfulGraduatesTranslationOptions(TranslationOptions):
    fields = ('content',)


@register(News)
class NewsTranslationOptions(TranslationOptions):
    fields = ('content', 'description')


@register(Teachers)
class TeachersTranslationOptions(TranslationOptions):
    fields = ('subject', 'education', 'successes')


@register(OldTeachers)
class OldTeachersTranslationOptions(TranslationOptions):
    fields = ('subject', 'education', 'successes')
