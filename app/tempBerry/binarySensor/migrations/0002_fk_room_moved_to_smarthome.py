# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-05-04 15:52
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('binarySensor', '0001_initial'),
        ('smarthome', '0002_room'),
    ]

    operations = [
        migrations.AlterField(
            model_name='binarysensordata',
            name='room',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='smarthome.Room', verbose_name='Which room is this entry associated to'),
        ),
    ]