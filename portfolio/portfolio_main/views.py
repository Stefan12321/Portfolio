from django.shortcuts import render
from .models import Project, MainTechnology


def index(request):
    return render(request, 'index.html')


def my_projects(request):
    projects = Project.objects.all()
    technology = MainTechnology.objects.all()
    print(projects[0].technology.id)
    print(technology[1].id)
    return render(request, 'my_projects.html', context={"projects": projects,
                                                        "technologies": technology})


def my_skills(request):
    return render(request, 'my_skills.html')


def test(request):
    return render(request, 'test.html')
