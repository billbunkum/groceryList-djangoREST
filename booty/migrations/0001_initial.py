# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GroceryList',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', primary_key=True, auto_created=True)),
                ('item_name', models.CharField(max_length=20)),
                ('item_price', models.DecimalField(default=0.0, decimal_places=2, max_digits=5)),
                ('date_added', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
