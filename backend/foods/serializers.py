from rest_framework import serializers
from .models import Foods, Wishlist, Category

class CategorySerializer(serializers.ModelSerializer):
    slug= serializers.SlugField(read_only=True)
    class Meta:
        model = Category
        fields = ["name", "slug"]

class FoodSerializer(serializers.ModelSerializer):
    category = serializers.HyperlinkedRelatedField(
        queryset= Category.objects.all(),
        view_name='category-detail',
        lookup_field = 'slug'
    )
    class Meta:
        model = Foods
        fields = ['name','quantity','price',
                    'category','image']

class FoodSerializerWishlist(serializers.ModelSerializer):
    
    class Meta:
        model = Foods
        fields = ['id','name','quantity','price',
                  'category','image']
        