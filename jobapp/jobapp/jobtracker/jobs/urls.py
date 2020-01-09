from django.urls import path
from .views import JobDescriptionListView

urlpatterns = [
    path('jobs', JobDescriptionListView.as_view())
]
