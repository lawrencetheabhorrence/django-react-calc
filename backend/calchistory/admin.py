from django.contrib import admin
from .models import History

class HistoryAdmin(admin.ModelAdmin):
    list_display = ('result', 'content')

# Register your models here.
admin.site.register(History, HistoryAdmin)
