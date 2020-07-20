from django.shortcuts import render
from django.http import JsonResponse
from skyfield.api import load
from skyfield.elementslib import osculating_elements_of
from contextlib import closing
import json
from rest_framework.response import Response
import math

# Create your views here.

def get_orbits(request):
    planets = load('de422.bsp')

    ts = load.timescale(builtin=True)
    t = ts.now()

    with closing(planets):
        planet_data = []
        planet_keys = ['SUN', 'MERCURY BARYCENTER', 'VENUS BARYCENTER', 'EARTH BARYCENTER', 'MARS BARYCENTER', 'JUPITER BARYCENTER', 'SATURN BARYCENTER', 'URANUS BARYCENTER', 'NEPTUNE BARYCENTER', 'PLUTO BARYCENTER']
        planet_arr = ['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto']

        planet_scale = [15, 0.38, 0.95, 1, 0.53, 11.2, 9.45, 4, 3.88, 5]


        for planet in planet_keys:
            planet_ephemeris = planets[planet].at(t)
            position = planet_ephemeris.position

            pos_x = position.au[0]
            pos_y = position.au[1]
            pos_z = position.au[2]
            position = {} 
            rotation = {}
            axes = {}

            if(planet != 'SUN'):
                sun = planets['SUN'].at(t)
                position = (planets[planet] - planets['sun']).at(t)
                elements = osculating_elements_of(position)
                axes = {
                    "semi-major-axis": elements.semi_major_axis.au,
                    "semi-minor-axis": elements.semi_minor_axis.au
                }
           
                rotation = {
                    "x": 0,
                    "y": 0,
                    "z": 0,
                    "loa": elements.longitude_of_ascending_node.radians,
                    "per": elements.argument_of_periapsis.radians - math.pi,
                    "inc": elements.inclination.radians
                }
                distance = (elements.semi_major_axis.au - elements.periapsis_distance.au)
                position = {
                    "x":  sun.position.au[0],
                    "y": sun.position.au[1],
                    "z":  sun.position.au[2]
                }

            planet_data.append({
                "name": planet_arr[planet_keys.index(planet)],
                "scale": planet_scale[planet_keys.index(planet)],
                "x": pos_x,
                "y": pos_y,
                "z": pos_z,
                "position": position,
                "rotation": rotation,
                "axes": axes
            })

        return JsonResponse(planet_data, safe=False)