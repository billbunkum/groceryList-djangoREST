from django.conf.urls import include, url
from rest_framework import routers

from booty.viewsets import GroceryListViewSet

router = routers.DefaultRouter()
router.register(r'groceryList', GroceryListViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]