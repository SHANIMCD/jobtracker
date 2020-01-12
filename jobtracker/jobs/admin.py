from django.contrib import admin
from .models import JobInfo, jobStatus, CompanyInfo
# Register your models here.

admin.site.register(JobInfo)
admin.site.register(jobStatus)
admin.site.register(CompanyInfo)
