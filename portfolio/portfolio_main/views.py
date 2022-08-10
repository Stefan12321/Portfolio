from django.shortcuts import render
from .models import Project, MainTechnology, Photo
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from .models import Skill, SkillIcon
from .serializers import SkillSerializer, ProjectsSerializer


class SkillViewSet(ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class ProjectsViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectsSerializer


def index(request):
    return render(request, 'index.html')


def my_projects(request):
    projects = Project.objects.all()
    technology = MainTechnology.objects.all()
    images = Photo.objects.all()
    print(projects[0].technology.id)
    print(technology[1].id)
    return render(request, 'my_projects.html', context={"projects": projects,
                                                        "technologies": technology,
                                                        "images": images})


def my_skills(request):
    return render(request, 'my_skills.html')


def test(request):
    projects = Project.objects.all()
    technology = MainTechnology.objects.all()
    return render(request, 'test.html', context={"technologies": technology,
                                                 "projects": projects})
