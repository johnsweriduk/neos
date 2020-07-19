from django.shortcuts import render
from django.http import JsonResponse
from skyfield.api import load
from contextlib import closing
import json
from rest_framework.response import Response

# Create your views here.

def get_orbits(request):
    planets = load('de422.bsp')

    ts = load.timescale(builtin=True)
    t = ts.J2000

    with closing(planets):
        planet_data = []
        planet_keys = ['SUN', 'MERCURY BARYCENTER', 'VENUS BARYCENTER', 'EARTH BARYCENTER', 'MARS BARYCENTER', 'JUPITER BARYCENTER', 'SATURN BARYCENTER', 'URANUS BARYCENTER', 'NEPTUNE BARYCENTER', 'PLUTO BARYCENTER']
        planet_arr = ['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto']

        for planet in planet_keys:
            planet_ephemeris = planets[planet].at(t)
            position = planet_ephemeris.position

            pos_x = position.au[0]
            pos_y = position.au[1]
            pos_z = position.au[2]

            planet_data.append({
                "name": planet_arr[planet_keys.index(planet)],
                "x": pos_x,
                "y": pos_y,
                "z": pos_z
            })

        return JsonResponse(planet_data, safe=False)