from django.conf import settings
import requests, json
from django.core.management.base import BaseCommand, CommandError
from neolist.models import Neo

#settings.NEO_API_KEY
#settings.NEO_BROWSE_URL
#settings.NEO_LOOKUP_URL


class Command(BaseCommand):

    def handle(self, *args, **options):
        url = settings.NEO_BROWSE_URL + settings.NEO_API_KEY

        response = requests.get(url)
        browse_data = json.loads(response.text)

        next_url = browse_data['links']['next']

        hazardous_asteroids = []

        while(next_url):
            neo_list = browse_data['near_earth_objects']

            for asteroid in neo_list:
                if(asteroid['is_potentially_hazardous_asteroid']):
                    if(not asteroid['orbital_data']['orbit_class'] is None):
                        if(asteroid['orbital_data']['orbit_class']['orbit_class_type'] == 'APO'):
                            if(asteroid['estimated_diameter']['kilometers']['estimated_diameter_min'] > 3):
                                hazardous_asteroids.append(asteroid);

            response = requests.get(next_url)
            browse_data = response.json()
            next_url = browse_data['links']['next']
            self.stdout.write('next url: ' + next_url)
            self.stdout.write('hazardous asteroids: ' + str(len(hazardous_asteroids)))
            if(len(hazardous_asteroids) >= 5):
                next_url = 0

        for asteroid in hazardous_asteroids:
            try:
                found_asteroid = Neo.objects.get(asteroid_id=asteroid['id'])
            except Neo.DoesNotExist:
                found_asteroid = Neo(asteroid_id=asteroid['id'], name=asteroid['name'])
                found_asteroid.save()
