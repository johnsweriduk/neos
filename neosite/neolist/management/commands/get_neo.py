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
                    close_approach_data = asteroid['close_approach_data']
                    closest_approach = 100000000 # very large number used for comparison
                    for approach in close_approach_data:
                        miss_distance = approach['miss_distance']['miles']
                        if(float(miss_distance) < closest_approach):
                            closest_approach = float(miss_distance)
                    if(closest_approach < settings.MAX_CLOSE_APPROACH_DISTANCE):
                        hazardous_asteroids.append(asteroid)

            response = requests.get(next_url)
            browse_data = response.json()
            next_url = browse_data['links']['next']
            self.stdout.write('next url: ' + next_url)
            self.stdout.write('hazardous asteroids: ' + str(len(hazardous_asteroids)))
            if(len(hazardous_asteroids) >= 50):
                next_url = 0

        for asteroid in hazardous_asteroids:
            try:
                found_asteroid = Neo.objects.get(asteroid_id=asteroid['id'])
            except Neo.DoesNotExist:
                found_asteroid = Neo(asteroid_id=asteroid['id'], name=asteroid['name'])
                found_asteroid.save()
