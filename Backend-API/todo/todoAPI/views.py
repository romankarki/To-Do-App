from django.shortcuts import render
from .serializers import TaskSerializer
from .models import Task
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions,authentication

# Create your views here.

class TaskAPI(APIView):

    authentication_classes=[authentication.TokenAuthentication]
    permission_classes=[
        permissions.IsAuthenticated
    ]

    def get(self,request):

        tasks = Task.objects.all().filter(user=request.user.id)
        serializer = TaskSerializer(tasks,many=True)
        return Response(serializer.data)

    def post(self,request):
        d = {
            "user":request.user.id
        }
        request.data.update(d)
        serializer = TaskSerializer(data = request.data)


        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class Task_Operate(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes=[permissions.IsAuthenticated]

    def get_object(self,pk,uid):
        tasks = Task.objects.all().filter(pk=pk ).filter(user = uid)
        return tasks
    
    def get(self,request,pk):
        tasks = self.get_object(pk,request.user.id)
        serializer = TaskSerializer(tasks,many=True)
        return Response(serializer.data)
    
    def put(self,request,pk):
        task = self.get_object(pk,request.user.id).first()
      
        serializer = TaskSerializer(task,request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)

    def delete(self,request,pk):
        task = self.get_object(pk,request.user.id)
        task.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)        



