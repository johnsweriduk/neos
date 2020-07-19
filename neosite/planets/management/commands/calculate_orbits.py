from django.conf import settings
from django.core.management.base import BaseCommand, CommandError
from skyfield.api import load
from contextlib import closing

#settings.NEO_API_KEY
#settings.NEO_BROWSE_URL
#settings.NEO_LOOKUP_URL


class Command(BaseCommand):

    def handle(self, *args, **options):
        planets = load('de422.bsp')

        ts = load.timescale(builtin=True)
        t = ts.J2000

        with closing(planets):
            planet_data = []
            planet_arr = ['earth', 'mars', 'mercury', 'venus']

            for planet in planet_arr:
                planet_ephemeris = planets[planet].at(t)
                position = planet_ephemeris.position

                pos_x = position.au[0]
                pos_y = position.au[1]
                pos_z = position.au[2]
                #print(planet + ' ' + str(position.au))
                planet_data.append({
                    "name": planet,
                    "x": pos_x,
                    "y": pos_y,
                    "z": pos_z
                    })

            print(planet_data)