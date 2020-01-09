# pylint: disable=no-member
from django.shortcuts import render
from .models import JobDescription
from rest_framework.generics import ListAPIview
from rest_framework.permissions import IsAuthenticatedOrReadOnly
# Create your views here.

class JobDescriptionListView(ListAPIview):
    permission_classes = (IsAuthenticatedOrReadOnly, )
    queryset = JobDescription.objects.all()