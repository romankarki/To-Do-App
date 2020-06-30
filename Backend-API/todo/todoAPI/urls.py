from django.urls import path,include
from .views import TaskAPI,Task_Operate

urlpatterns = [
    path("", include('djoser.urls')),
    path("", include('djoser.urls.authtoken')),
    path("tasks/",TaskAPI.as_view()),
    path("tasks/<int:pk>/",Task_Operate.as_view()),
]
