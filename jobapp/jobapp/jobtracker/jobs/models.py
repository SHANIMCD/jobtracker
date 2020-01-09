from django.db import models

class JobDescription(models.Model):
    companyName = models.CharField(max_length=500)
    image = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    jobTitle = models.CharField(max_length=150)
    notes = models.TextField(max_length=1000)
    postUrl = models.CharField(max_length=200)

    def __str__(self):
        return self.companyName
