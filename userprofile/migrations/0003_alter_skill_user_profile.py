# Generated by Django 3.2.10 on 2022-02-14 07:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0002_alter_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skill',
            name='user_profile',
            field=models.ManyToManyField(related_name='skills', to='userprofile.Profile'),
        ),
    ]