from django.urls import path
from . import views

urlpatterns = [
    path('api/planets', views.get_orbits)
]