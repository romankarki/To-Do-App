# Generated by Django 3.0.7 on 2020-06-28 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todoAPI', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]