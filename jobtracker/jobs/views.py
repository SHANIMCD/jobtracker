# pylint: disable=no-member
from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import jobStatus, JobInfo, CompanyInfo
from .serializers import JobInfoSerializer, jobStatusSerializer, CompanyInfoSerializer

# Create your views here.

class JobInfoListView(ListCreateAPIView):
    queryset = JobInfo.objects.all()
    serializer_class = JobInfoSerializer

class JobInfoDetailsView(RetrieveUpdateDestroyAPIView):
    queryset = JobInfo.objects.all()
    serializer_class = JobInfoSerializer

class CompanyInfoListView(ListAPIView):
    queryset = CompanyInfo.objects.all()
    serializer_class = CompanyInfoSerializer

class CompanyInfoDetailsView(RetrieveUpdateDestroyAPIView):
    queryset = CompanyInfo.objects.all()
    serializer_class = CompanyInfoSerializer

class jobStatusListView(ListCreateAPIView):
    queryset = jobStatus.objects.all()
    serializer_class = jobStatusSerializer

class jobStatusDetailView(RetrieveAPIView):
    queryset = jobStatus.objects.all()
    serializer_class = jobStatusSerializer