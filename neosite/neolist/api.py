from neolist.models import Neo
from rest_framework import viewsets, permissions
from .serializers import NeoSerializer

#Neo Viewset
class NeoViewSet(viewsets.ModelViewSet):
    queryset = Neo.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = NeoSerializer