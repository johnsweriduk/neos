from django.shortcuts import render
from skyfield.api import load
from contextlib import closing
import json
from rest_framework.response import Response

# Create your views here.

def get_orbits(request):
    planets = load('de406.bsp')

        ts = load.timescale(builtin=True)
        t = ts.now().J2000

        with closing(planets):
            planet_data = []
            planet_arr = ['earth', 'jupiter', 'mars', 'mercury', 'neptune', 'saturn', 'uranus', 'venus']

            earth = planets['earth']
            jupiter = planets['jupiter']
            mars = planets['mars']
            mercury = planets['mercury']
            neptune = planets['neptune']
            saturn = planets['saturn']
            uranus = planets['uranus']
            venus = planets['venus']

            for planet in planet_arr:
                planet_ephemeris = planets[planet].at(t)
                position = planet_ephemeris.position
                print(planet + ' ' + position.length())