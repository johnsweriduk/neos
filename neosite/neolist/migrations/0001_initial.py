# Generated by Django 3.0.8 on 2020-07-14 22:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Neo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('asteroid_id', models.CharField(max_length=100)),
                ('min_diameter', models.DecimalField(decimal_places=2, max_digits=5)),
                ('max_diameter', models.DecimalField(decimal_places=2, max_digits=5)),
                ('eccentricity', models.DecimalField(decimal_places=16, max_digits=16)),
                ('axis', models.DecimalField(decimal_places=16, max_digits=16)),
                ('perihelion_distance', models.DecimalField(decimal_places=16, max_digits=16)),
                ('inclination', models.DecimalField(decimal_places=16, max_digits=16)),
                ('node', models.DecimalField(decimal_places=16, max_digits=16)),
                ('perihelion_argument', models.DecimalField(decimal_places=16, max_digits=16)),
                ('mean_anomaly', models.DecimalField(decimal_places=16, max_digits=16)),
                ('perihelion_time', models.DecimalField(decimal_places=16, max_digits=16)),
                ('orbital_period', models.DecimalField(decimal_places=16, max_digits=16)),
                ('mean_motion', models.DecimalField(decimal_places=16, max_digits=16)),
                ('aphelion_distance', models.DecimalField(decimal_places=16, max_digits=16)),
            ],
        ),
    ]
