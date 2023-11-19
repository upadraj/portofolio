from django.db import models


# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    email = models.EmailField(max_length=255, blank=False, null=False)
    subject = models.CharField(max_length=255, blank=False, null=False)
    message = models.TextField(blank=False, null=False)
