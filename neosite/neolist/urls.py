from rest_framework import routers
from .api import NeoViewSet

router = routers.DefaultRouter()
router.register('neo', NeoViewSet, 'neo')

urlpatterns = router.urls