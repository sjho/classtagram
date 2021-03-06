# Generated by Django 2.1.7 on 2019-06-17 09:53

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classtagram', '0004_course_photo_request_tag'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='users',
            field=models.ManyToManyField(related_name='courses_user', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='photo',
            name='photo',
            field=models.ImageField(null=True, upload_to='media'),
        ),
    ]
