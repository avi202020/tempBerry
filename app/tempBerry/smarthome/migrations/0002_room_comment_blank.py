# -*- coding: utf-8 -*-
# Generated by Django 1.11.27 on 2020-01-03 08:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('smarthome', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='comment',
            field=models.TextField(blank=True, default='', verbose_name='Comment for this room'),
        ),
    ]