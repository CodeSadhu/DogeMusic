# This code translates all models from SQLite into JSON objects.
# eg: code: {x: a}

from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guest_can_pause', 'votes_to_skip', 'created_at')
        # id is added here to indicate primary key. created at runtime automatically when new value inserted.