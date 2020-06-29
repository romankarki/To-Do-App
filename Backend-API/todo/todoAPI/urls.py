from django.urls import path
from .views import TaskAPI

urlpatterns = [
    path("tasks/",TaskAPI.as_view()),
]
