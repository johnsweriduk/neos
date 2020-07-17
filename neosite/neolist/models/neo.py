from django.db import models
class Neo(models.Model):

    name = models.CharField(max_length = 100)

    asteroid_id = models.CharField(max_length = 100)

    min_diameter = models.DecimalField(max_digits = 5, decimal_places = 2)
    max_diameter = models.DecimalField(max_digits = 5, decimal_places = 2)

    eccentricity = models.DecimalField(max_digits = 1, decimal_places = 16)
    axis = models.DecimalField(max_digits = 16, decimal_places = 16)
    perihelion_distance = models.DecimalField(max_digits = 16, decimal_places = 16)
    inclination = models.DecimalField(max_digits = 16, decimal_places = 16)
    node = models.DecimalField(max_digits = 16, decimal_places = 16);
    perihelion_argument = models.DecimalField(max_digits = 16, decimal_places = 16)
    mean_anomaly = models.DecimalField(max_digits = 16, decimal_places = 16)
    perihelion_time = models.DecimalField(max_digits = 16, decimal_places = 16)
    orbital_period = models.DecimalField(max_digits = 16, decimal_places = 16)
    mean_motion = models.DecimalField(max_digits = 16, decimal_places = 16)
    aphelion_distance = models.DecimalField(max_digits = 16, decimal_places = 16)

    def __str__(self): 
        return self.title 