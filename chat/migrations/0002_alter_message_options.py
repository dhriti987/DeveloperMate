# Generated by Django 3.2.10 on 2022-06-26 11:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='message',
            options={'ordering': ('timestamp',)},
        ),
    ]
