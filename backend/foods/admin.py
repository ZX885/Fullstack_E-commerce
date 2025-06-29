from django.contrib import admin
from .models import Wishlist
from .models import Foods

# Register your models here.
admin.site.register(Wishlist)
admin.site.register(Foods)