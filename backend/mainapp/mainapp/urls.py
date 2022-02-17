from django.contrib import admin
from django.urls import path
from core import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('/user', views.user, name='user'),
    path('/login', views.issue_token, name='issue_token')
]
