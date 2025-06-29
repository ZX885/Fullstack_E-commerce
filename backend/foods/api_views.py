from .usecases import *
from .models import Foods, Wishlist
from .serializers import FoodSerializerWishlist, FoodSerializer
from rest_framework.response import Response
from rest_framework.status import*

class FoodList(NoAuthApiView):
    """List all foods"""
    def get(self, request):
        food = Foods.objects.all()
        serializer = FoodSerializerWishlist(food, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    def post(self, request):
        serializer = FoodSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

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