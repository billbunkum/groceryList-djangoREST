from django.db import models

class GroceryList(models.Model):
    item_name = models.CharField(max_length=20)
    item_price = models.DecimalField(default=1.00, max_digits=5, decimal_places=2)
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-date_added', )

    def __str__(self):
        self.item_name = item_name


#logic here is wrong somehow
    def total_price(self):
        total_price = 0
        groceryItems = GroceryList.objects.all()

        for item in groceryItems:
            total_price += item.item_price

        return total_price