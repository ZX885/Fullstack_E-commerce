from rest_framework import serializers
from .models import Foods, Wishlist


class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Foods
        fields = ['name','quantity','price',
                    'category','image']

class FoodSerializerWishlist(serializers.ModelSerializer):
    class Meta:
        model = Foods
        fields = ['id','name','quantity','price',
                  'category','image']