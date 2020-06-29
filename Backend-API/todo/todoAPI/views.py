from django.shortcuts import render
from .serializers import TaskSerializer
from .models import Task
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class TaskAPI(APIView):

    def get(self,request):
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = TaskSerializer(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
