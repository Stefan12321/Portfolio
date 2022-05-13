from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=200, verbose_name="Skill name")
    level = models.IntegerField(verbose_name="Skill level")
    description = models.TextField(max_length=1000, verbose_name="Skill description")

    def __str__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=200, verbose_name="Project name")
    git_url = models.URLField(verbose_name="url to git project")
    description = models.TextField(max_length=1000, verbose_name="Project description")
    image = models.ImageField(null=True, blank=True, upload_to="images/")
    technology = models.ForeignKey('MainTechnology',
                                   on_delete=models.CASCADE,
                                   verbose_name="Project main technology",
                                   default=0)

    def __str__(self):
        return self.name


class MainTechnology(models.Model):
    name = models.CharField(max_length=200, verbose_name="Main technology")

    def __str__(self):
        return self.name


