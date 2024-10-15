from django.contrib import admin
from .models import UserProfile, Comment, CommentReply, Like, Donation, DonationRequisite

admin.site.register(UserProfile)
admin.site.register(Comment)
admin.site.register(CommentReply)
admin.site.register(Like)


@admin.register(DonationRequisite)
class DonationRequisiteAdmin(admin.ModelAdmin):
    list_display = ['id', 'requisite_first', 'requisite_second']


@admin.register(Donation)
class DonationAdmin(admin.ModelAdmin):
    list_display = ['id', 'surname', 'name', 'count']
    search_fields = ['surname', 'name']
    list_filter = ['count']
