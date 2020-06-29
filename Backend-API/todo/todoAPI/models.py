from django.db import models
from django.utils.timezone import now
# Create your models here.

class Task(models.Model):

    title = models.CharField(max_length=200)
    status = models.CharField(max_length=100,default="Not done")
    notes = models.CharField(max_length=300)
    date = models.DateField(default=now, editable=False)

    
    def __str__(self):
        return self.title 
    

