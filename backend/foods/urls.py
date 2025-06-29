from django.urls import path
from .api_views import FoodList, FoodDetails, WishlistApiView


urlpatterns = [
    path('', FoodList.as_view()),
    path('<int:pk>/', FoodDetails.as_view()),
    path('wishlist/', WishlistApiView.as_view()),
]

# router.register(r'foods', FoodViewSet)