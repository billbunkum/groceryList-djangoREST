from rest_framework import serializers

from .models import GroceryList

class GroceryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroceryList
        fields = ('item_name', 'item_price', 'date_added', )
        read_only_fields = ('item_price', 'date_added', )