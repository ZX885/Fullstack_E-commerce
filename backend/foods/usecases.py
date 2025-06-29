from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Foods, Wishlist


class NoAuthApiView(APIView):
    """Doesn`t require authentication"""
    permission_classes = [AllowAny]
    
class AuthApiView(NoAuthApiView):
    """Requires authentication"""
    permission_classes = [IsAuthenticated]
    
def get_wishlist(request):
    if request.user.is_authenticated:
        wishlist_objs = Wishlist.objects.filter(owner=request.user)
        return wishlist_objs[0]
    return []

def set_wishlist(request, food_id:int):
    if request.user.is_authenticated:
        wishlist_objs = Wishlist.objects.filter(owner=request.user)
        if wishlist_objs:
            wishlist = wishlist_objs[0]
        else:
            wishlist = Wishlist.objects.create(owner=request.user)
            
        food = Foods.objects.get(pk=food_id)
        wishlist.foods.add(food)
        return

def del_food_from_wishlist(request, food_id:int):
    if request.user.is_authenticated:
        if wishlist := WishList.objects.filter(owner=request.user)[0]:
            food = Foods.objects.get(pk=food_id)
            wishlist.foods.remove(food_id)
    return