from django.urls import path
from . import views

urlpatterns = [
    path('api/backend/', views.LeadListCreate.as_view()),
]