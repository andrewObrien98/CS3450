# Generated by Django 4.0.2 on 2022-03-15 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moneyLawndering', '0005_remove_appliedfor_customer_appliedfor_listing_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='dayOfWeek',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='listing',
            name='endTimeOfDay',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='listing',
            name='startTimeOfDay',
            field=models.CharField(max_length=100),
        ),
    ]
