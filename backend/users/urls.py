from django.urls import path
from django.conf.urls.static import static
from .api_views import register, login_view, logout_view, user_profile
# from django.contrib.auth import logout
from django.conf import settings
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView, TokenObtainPairView

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login_view, name='login'), 
    path('logout/', logout_view, name='logout'), 
    path('profile/', user_profile, name='profile'), 
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    # when we send a request to this url, we will be logged out
]
