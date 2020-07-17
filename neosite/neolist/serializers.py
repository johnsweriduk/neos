from rest_framework import serializers
from .models import Neo

class NeoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Neo
        fields = '__all__'