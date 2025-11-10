from .usecases import *
from .models import Foods, Wishlist
from .serializers import FoodSerializerWishlist, FoodSerializer
from rest_framework.response import Response
from rest_framework.status import*
from rest_framework.views import*

class FoodList(NoAuthApiView):
    """List all foods"""
    def get(self, request):
        food = Foods.objects.all()
        serializer = FoodSerializer(food, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    def post(self, request):
        serializer = FoodSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
    
    def put(self, request):
        pass
    
        
        
class FoodDelete(APIView):
    def delete_food(self, request, pk):
        try:
            food = Foods.objects.get(id=pk)
            food.delete()
            return Response({'message':'Food deleted successfuly'}, status=HTTP_204_NO_CONTENT)
        except Foods.DoesNotExist:
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

    # def get(self, request):
    #     food = []
    #     if wishlist := get_wishlist(request):
    #         foods = wishlist.foods.all()
    #     serializer = FoodSerializerWishlist(foods, many=True)
    #     return Response(serializer.data, status=HTTP_200_OK)
    def get(self, request):
        wishlist = get_wishlist(request)
        if not wishlist:
            return Response([], status=HTTP_200_OK)  # ✅ вернём пустой список, а не ошибку

        foods = wishlist.foods.all()
        serializer = FoodSerializerWishlist(foods, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    def post(self, request):
        print("=============================================")
        print("request.data: ", request.data)
        print("=============================================")
        food_id = request.data.get('food_id')
        delete = request.data.get('delete_food', False)
        if delete:
            del_food_from_wishlist(request, food_id)
        else:
            set_wishlist(request, food_id)
        return Response(status=HTTP_200_OK)