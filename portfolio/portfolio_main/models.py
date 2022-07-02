from django.db import models
from PIL import Image


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
    technology = models.ForeignKey('MainTechnology',
                                   on_delete=models.CASCADE,
                                   verbose_name="Project main technology",
                                   default=0)

    def __str__(self):
        return self.name


class Photo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='photos')
    photo = models.ImageField(upload_to='projects_images/')

    # resizing the image, you can change parameters like size and quality.
    def save(self, *args, **kwargs):
        super(Photo, self).save(*args, **kwargs)
        img = Image.open(self.photo.path)
        if img.height > 1125 or img.width > 1125:
            img.thumbnail((1125, 1125))
        img.save(self.photo.path, quality=70, optimize=True)

    def get_path(self):
        return f"media/{self.photo}"



class MainTechnology(models.Model):
    name = models.CharField(max_length=200, verbose_name="Main technology")

    def __str__(self):
        return self.name
