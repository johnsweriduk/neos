# Generated by Django 3.0.8 on 2020-07-15 01:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('neolist', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='neo',
            name='aphelion_distance',
            field=models.DecimalField(decimal_places=16, max_digits=32),
        ),
        migrations.AlterField(
            model_name='neo',
            name='axis',
            field=models.DecimalField(decimal_places=16, max_digits=32),
        ),
        migrations.AlterField(
            model_name='neo',
            name='eccentricity',
            field=models.DecimalField(decimal_places=16, max_digits=32),
        ),
        migrations.AlterField(
            model_name='neo',
            name='inclination',
            field=models.DecimalField(decimal_places=16, max_digits=32),
        ),
        migrations.AlterField(
            model_name='neo',
            name='mean_anomaly',
            field=models.DecimalField(decimal_places=16, max_digits=32),
        ),
        migrations.AlterField(
            model_name='neo',
            name='mean_motion',
            field=models.DecimalField(decimal_places=16, max_digits=32),
        ),
        migrations.AlterField(
            model_name='neo',
            name='node',
            field=models.DecimalField(decimal_places=16, max_digits=32),
        ),
        migrations.AlterField(
            model_name='neo',
            name='orbital_period',
            field=models.DecimalField(decimal_places=16, max_digits=32),
        ),
        migrations.AlterField(
            model_name='neo',
            name='perihelion_argument',
            field=models.DecimalField(decimal_places=16, max_digits=32),
        ),
        migrations.AlterField(
            model_name='neo',
            name='perihelion_distance',
            field=models.DecimalField(decimal_places=16, max_digits=32),
        ),
        migrations.AlterField(
            model_name='neo',
            name='perihelion_time',
            field=models.DecimalField(decimal_places=16, max_digits=32),
        ),
    ]