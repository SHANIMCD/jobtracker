from django.db import models

# Create your models here.

# Many to many model

class CompanyInfo(models.Model):
   company_name = models.CharField(max_length=100)
   Address = models.TextField(max_length=500)
   Industry = models.CharField(max_length=100)
   

   def __str__(self):
       return self.company_name


# 1 to many model
class jobStatus(models.Model):
    job_status = models.CharField(max_length=200)

    def __str__(self):
        return self.job_status

# Main model
class JobInfo(models.Model):
    job_title = models.CharField(max_length=300)
    salary = models.CharField(max_length=50)
    post_url = models.CharField(max_length=200)
    resource_url = models.CharField(max_length=200)
    Description = models.TextField(max_length=500)
    created = models.DateTimeField(auto_now_add=True)
    job_status = models.ForeignKey(
        jobStatus,
        related_name='jobs',
        on_delete=models.DO_NOTHING,
        null=True
    )

    companies = models.ManyToManyField(
        CompanyInfo,
        related_name='jobs',
        blank=True
    )

    def __str__(self):
        return self.job_title