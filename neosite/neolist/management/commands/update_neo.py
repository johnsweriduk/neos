from django.conf import settings
import requests, json
from django.core.management.base import BaseCommand, CommandError
from neolist.models import Neo

#settings.NEO_API_KEY
#settings.NEO_BROWSE_URL
#settings.NEO_LOOKUP_URL


class Command(BaseCommand):

    def handle(self, *args, **options):
        for asteroid in Neo.objects.all():
            asteroid_id = asteroid.asteroid_id
            url = settings.NEO_LOOKUP_URL + str(asteroid_id) + '?api_key=' +settings.NEO_API_KEY
            self.stdout.write(url)
            response = requests.get(url)

            asteroid_data = json.loads(response.text)
            orbital_data = asteroid_data['orbital_data']

            asteroid.min_diameter = asteroid_data['estimated_diameter']['meters']['estimated_diameter_min']
            asteroid.max_diameter = asteroid_data['estimated_diameter']['meters']['estimated_diameter_max']

            asteroid.eccentricity = orbital_data['eccentricity']
            asteroid.axis = orbital_data['semi_major_axis']
            asteroid.perihelion_distance = orbital_data['perihelion_distance']
            asteroid.inclination = orbital_data['inclination']
            asteroid.node = orbital_data['ascending_node_longitude']
            asteroid.perihelion_argument = orbital_data['perihelion_argument']
            asteroid.mean_anomaly = orbital_data['mean_anomaly']
            asteroid.perihelion_time = orbital_data['perihelion_time']
            asteroid.orbital_period = orbital_data['orbital_period']
            asteroid.mean_motion = orbital_data['mean_motion']
            asteroid.aphelion_distance = orbital_data['aphelion_distance']

            asteroid.save()
