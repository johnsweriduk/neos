from rest_framework import routers
from .api import NeoViewSet
from . import views
from django.urls import path

router = routers.DefaultRouter()
router.register('api/neo', NeoViewSet, 'neo')

urlpatterns = router.urls
urlpatterns.append(
    path('api/neo/vote/<int:id>', views.vote_neo)
)