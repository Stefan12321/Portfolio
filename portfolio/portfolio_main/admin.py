from django.contrib import admin
from .models import Skill, Project, MainTechnology, Photo


class PhotoAdmin(admin.StackedInline):
    model = Photo


class ProjectAdmin(admin.ModelAdmin):
    inlines = [PhotoAdmin]

    class Meta:
        model = Project


admin.site.register(Skill)
admin.site.register(Project, ProjectAdmin)
admin.site.register(MainTechnology)
