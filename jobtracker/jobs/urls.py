from django.urls import path
from .views import jobStatusListView, jobStatusDetailView, JobInfoDetailsView, JobInfoListView, CompanyInfoListView, CompanyInfoDetailsView

urlpatterns = [
    path('jobs', JobInfoListView.as_view()),
    path('jobs/<int:pk>/', JobInfoDetailsView.as_view()),
    path('companyinfo/', CompanyInfoListView.as_view()),
    path('companyinfo/<int:pk>/', CompanyInfoDetailsView.as_view()),
    path('jobstatus', jobStatusListView.as_view()),
    path('jobstatus/<int:pk>/', jobStatusDetailView.as_view())
]