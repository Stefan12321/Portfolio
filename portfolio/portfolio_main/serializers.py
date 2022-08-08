from rest_framework import serializers

from .models import Skill, SkillIcon


class SkillSerializer(serializers.ModelSerializer):

    icon = serializers.CharField(source='icon.photo', default=None)

    class Meta:
        model = Skill
        fields = ('name', 'level', 'description', 'icon')
