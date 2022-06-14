from django.db import models

# Create your models here.
class BONUS(models.Model):
    email=models.EmailField()
    first_name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=100)
    address=models.TextField()