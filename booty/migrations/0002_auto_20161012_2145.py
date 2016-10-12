# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booty', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='grocerylist',
            options={'ordering': ('-date_added',)},
        ),
        migrations.AlterField(
            model_name='grocerylist',
            name='item_price',
            field=models.DecimalField(default=1.0, max_digits=5, decimal_places=2),
        ),
    ]
