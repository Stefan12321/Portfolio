from rest_framework import serializers

from .models import Skill, SkillIcon, Project, Photo


class SkillSerializer(serializers.ModelSerializer):

    icon = serializers.CharField(source='icon.photo', default=None)

    class Meta:
        model = Skill
        fields = ('name', 'level', 'description', 'icon')

class PhotoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Photo
        fields = '__all__'


class ProjectsSerializer(serializers.ModelSerializer):
    technology = serializers.CharField(source='technology.name', default=None)
    photos = PhotoSerializer(many=True, read_only=True)
    print(photos)

    class Meta:
        model = Project
        fields = ('name', 'git_url', 'description', 'technology', 'photos')


