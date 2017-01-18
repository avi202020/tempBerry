# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-15 14:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TemperatureDataEntry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='When was this entry created at')),
                ('source', models.CharField(max_length=128, verbose_name='Where is this entry from')),
                ('sensor_id', models.IntegerField(db_index=True)),
                ('temperature', models.FloatField()),
                ('humidity', models.FloatField()),
                ('battery', models.SmallIntegerField()),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='UnknownDataEntry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='When was this entry created at')),
                ('source', models.CharField(max_length=128, verbose_name='Where is this entry from')),
                ('raw_data', models.TextField()),
            ],
            options={
                'abstract': False,
            },
        ),
    ]