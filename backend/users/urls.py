from django.urls import path
from django.conf.urls.static import static
from .api_views import register
from django.contrib.auth import logout
from django.conf import settings

urlpatterns = [
    path('register/', register, name='register'),
    path('logout/', logout, name='logout'), 
    # when we send a request to this url, we will be logged out
]
