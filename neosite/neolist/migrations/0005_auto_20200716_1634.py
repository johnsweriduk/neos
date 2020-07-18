# Generated by Django 3.0.8 on 2020-07-16 23:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('neolist', '0004_auto_20200716_1632'),
    ]

    operations = [
        migrations.AlterField(
            model_name='neo',
            name='aphelion_distance',
            field=models.DecimalField(blank=True, decimal_places=32, max_digits=64, null=True),
        ),
        migrations.AlterField(
            model_name='neo',
            name='axis',
            field=models.DecimalField(blank=True, decimal_places=32, max_digits=64, null=True),
        ),
        migrations.AlterField(
            model_name='neo',
            name='eccentricity',
            field=models.DecimalField(blank=True, decimal_places=32, max_digits=64, null=True),
        ),
        migrations.AlterField(
            model_name='neo',
            name='inclination',
            field=models.DecimalField(blank=True, decimal_places=32, max_digits=64, null=True),
        ),
        migrations.AlterField(
            model_name='neo',
            name='mean_anomaly',
            field=models.DecimalField(blank=True, decimal_places=32, max_digits=64, null=True),
        ),
        migrations.AlterField(
            model_name='neo',
            name='mean_motion',
            field=models.DecimalField(blank=True, decimal_places=32, max_digits=64, null=True),
        ),
        migrations.AlterField(
            model_name='neo',
            name='node',
            field=models.DecimalField(blank=True, decimal_places=32, max_digits=64, null=True),
        ),
        migrations.AlterField(
            model_name='neo',
            name='orbital_period',
            field=models.DecimalField(blank=True, decimal_places=32, max_digits=64, null=True),
        ),
        migrations.AlterField(
            model_name='neo',
            name='perihelion_argument',
            field=models.DecimalField(blank=True, decimal_places=32, max_digits=64, null=True),
        ),
        migrations.AlterField(
            model_name='neo',
            name='perihelion_distance',
            field=models.DecimalField(blank=True, decimal_places=32, max_digits=64, null=True),
        ),
        migrations.AlterField(
            model_name='neo',
            name='perihelion_time',
            field=models.DecimalField(blank=True, decimal_places=32, max_digits=64, null=True),
        ),
    ]