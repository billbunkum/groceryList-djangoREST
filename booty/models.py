from django.db import models

class GroceryList(models.Model):
    item_name = models.CharField(max_length=20)
    item_price = models.DecimalField(default=1.00, max_digits=5, decimal_places=2)
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-date_added', )
    def __str__(self):
        self.item_name = item_name

    def total_price(self):
        total_price = 0
        for i in self.item_price:
            total_price += i

        return total_price