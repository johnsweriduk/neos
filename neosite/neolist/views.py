from django.shortcuts import render
from django.http import HttpResponse
from neolist.models import Neo

# Create your views here.

def vote_neo(request, id):
    neo = Neo.objects.get(asteroid_id=id)
    neo.votes += 1
    neo.save()
    return HttpResponse(200)