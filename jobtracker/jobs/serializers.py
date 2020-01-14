from rest_framework import serializers
from .models import JobInfo, jobStatus, CompanyInfo


class NestedJobInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobInfo
        fields = ('id', 'job_title')

class NestedjobStatusSerializer(serializers.ModelSerializer):

    class Meta:
        model = jobStatus
        fields = ('id', 'job_status')

class NestedCompanyInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = CompanyInfo
        fields = ('id', 'company_name')

class CompanyInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = CompanyInfo
        fields = ('id', 'company_name', 'Address', 'Industry')

class jobStatusSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = jobStatus
        fields = ('id', 'job_status')


class JobInfoSerializer(serializers.ModelSerializer):

    job_status = NestedjobStatusSerializer()
    company = NestedCompanyInfoSerializer(many=True)

    class Meta:
        model = JobInfo
        fields = ('id', 'job_title', 'salary', 'post_url', 'resource_url', 'job_status', 'company', 'Description')

