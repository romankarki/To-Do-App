from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Task(models.Model):

    title = models.CharField(max_length=200)
    status = models.CharField(max_length=100,default="Not done")
    notes = models.CharField(max_length=300)
    date = models.DateField(auto_now_add=True, editable=False)
    user = models.ForeignKey(User,blank=True,on_delete=models.CASCADE,null=True)

    
    def __str__(self):
        return self.title 
    

