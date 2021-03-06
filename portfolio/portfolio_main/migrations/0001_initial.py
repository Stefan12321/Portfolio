# Generated by Django 4.0.4 on 2022-05-10 10:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='Skill name')),
                ('git_url', models.URLField(verbose_name='url to git project')),
                ('description', models.TextField(max_length=1000, verbose_name='Project description')),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/')),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='Skill name')),
                ('level', models.IntegerField(verbose_name='Skill level')),
                ('description', models.TextField(max_length=1000, verbose_name='Skill description')),
            ],
        ),
    ]
