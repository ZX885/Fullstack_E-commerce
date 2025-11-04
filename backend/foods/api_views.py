from .usecases import *
from .models import Foods, Wishlist, Category
from .serializers import FoodSerializerWishlist, FoodSerializer, CategorySerializer
from rest_framework.response import Response
from rest_framework.status import*

class FoodList(NoAuthApiView):
    """List all foods"""
    def get(self, request):
        food = Foods.objects.all()
        
        category = request.query_params.get('category')
        if category:
            food = food.filter(category_slug=category)
        
        serializer = FoodSerializer(food, many=True, context={"request":request})
        return Response(serializer.data, status=HTTP_200_OK)

    def post(self, request):
        serializer = FoodSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
    
    def put(self, request):
        pass
    
class CategoryDetails(AuthApiView):
    def get(self, request, slug):
        category = get_object_or_404(Category, slug=slug)
        serializer = CategorySerializer(category)
        return Response(serializer.data)
    
    def post(self, request, slug):
        category = CategorySerializer(data=request.data)
        if category.is_valid():
            category.save()
            return Response(category.data, status=HTTP_201_CREATED)
        
        
        
class FoodDelete(NoAuthApiView):
    def delete_food(request, pk):
        try:
            food = Foods.objects.get(id=pk)
            food.delete()
            return Response({'message':'Food deleted successfuly'}, status=HTTP_204_NO_CONTENT)
        except Food.DoesNotExist:
            return Response({'error': 'Food not found'}, status=HTTP_404_NOT_FOUND)

class FoodDetails(NoAuthApiView):
    """Get Food details"""
    def get(self, request, pk):
        food = Foods.objects.get(pk=pk)
        serializer = FoodSerializer(food)
        return Response(serializer.data,status=HTTP_200_OK)
    
    def put(self, request, pk):
        food = Foods.objects.get(pk=pk)
        serializer = FoodSerializer(food, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


    def delete(self, request, pk):
        food = Foods.objects.get(pk=pk)
        food.delete()
        return Response(status=HTTP_204_NO_CONTENT)
    
    
class WishlistApiView(NoAuthApiView):

    def get(self, request):
        food = []
        if wishlist := get_wishlist(request):
            foods = wishlist.foods.all()
        serializer = FoodSerializerWishlist(foods, many=True)
        return Response(serializer.data, status=HTTP_200_OK)


    def post(self, request):
        print("=============================================")
        print("request.data: ", request.data)
        print("=============================================")
        food_id = request.data.get('food_id')
        if delete := request.data.get('delete_food'):
            del_food_from_wishlist(request, food_id)
        else:
            set_wishlist(request, food_id)
        return Response(status=HTTP_200_OK)