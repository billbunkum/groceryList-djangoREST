from django.db import models

class GroceryList(models.Model):
    item_name = models.CharField(max_length=20)
    item_price = models.DecimalField(default=0.00)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        self.item_name = item_name

    def total_price(self):
        total_price = 0
        for i in item_price:
            total_price += i

        return total_price