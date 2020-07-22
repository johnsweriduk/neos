from django.db import models

# Create your models here.
class Neo(models.Model):

    name = models.CharField(max_length = 100)

    asteroid_id = models.CharField(max_length = 100)

    min_diameter = models.DecimalField(max_digits = 16, decimal_places = 8, null=True, blank=True)
    max_diameter = models.DecimalField(max_digits = 16, decimal_places = 8, null=True, blank=True)

    eccentricity = models.DecimalField(max_digits = 32, decimal_places = 16, null=True, blank=True)
    axis = models.DecimalField(max_digits = 32, decimal_places = 16, null=True, blank=True)
    perihelion_distance = models.DecimalField(max_digits = 32, decimal_places = 16, null=True, blank=True)
    inclination = models.DecimalField(max_digits = 32, decimal_places = 16, null=True, blank=True)
    node = models.DecimalField(max_digits = 32, decimal_places = 16, null=True, blank=True)
    perihelion_argument = models.DecimalField(max_digits = 32, decimal_places = 16, null=True, blank=True)
    mean_anomaly = models.DecimalField(max_digits = 32, decimal_places = 16, null=True, blank=True)
    perihelion_time = models.DecimalField(max_digits = 32, decimal_places = 16, null=True, blank=True)
    orbital_period = models.DecimalField(max_digits = 32, decimal_places = 16, null=True, blank=True)
    mean_motion = models.DecimalField(max_digits = 32, decimal_places = 16, null=True, blank=True)
    aphelion_distance = models.DecimalField(max_digits = 32, decimal_places = 16, null=True, blank=True)
    votes = models.IntegerField()

    def __str__(self): 
        return self.title