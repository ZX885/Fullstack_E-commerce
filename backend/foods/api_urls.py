from django.urls import path
from .api_views import *

urlpatterns = [
    path('', FoodList.as_view()),
    path('category-detail/<slug:slug>', CategoryDetails.as_view(), name='category-detail'),
    path('login', login, name="login"),    
]