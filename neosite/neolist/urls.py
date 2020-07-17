from rest_framework import routers
from .api import NeoViewSet

router = routers.DefaultRouter()
router.register('api/neo', NeoViewSet, 'neo')

urlpatterns = router.urls