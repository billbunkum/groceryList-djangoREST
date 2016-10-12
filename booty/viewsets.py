from rest_framework import viewsets
from rest_framework import filters

from .serializers import GroceryListSerializer
from .models import GroceryList

""" filters provides a lovely search """

class GroceryListViewSet(viewsets.ModelViewSet):
    serializer_class = GroceryListSerializer
    queryset = GroceryList.objects.all()

    def search_queryset(self):
        pass