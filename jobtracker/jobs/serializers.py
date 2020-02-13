# pylint: disable=no-member,arguments-differ
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
        fields = ('company_name', 'Address', 'Industry')

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
    companies = NestedCompanyInfoSerializer(many=True)


    def create(self, data):
        jobstatus_data = data.pop('job_status')
        companies_data = data.pop('companies')
        
        

        jobinfo = JobInfo(**data)
        jobinfo.job_status = jobStatus.objects.get(**jobstatus_data)
        companies = [CompanyInfo.objects.get(**company_data) for company_data in companies_data]
        jobinfo.save()
        jobinfo.companies.set(companies)
        return jobinfo

    def update(self, jobinfo, data):
        companies_data = data.pop('comapny')
        jobstatus_data = data.pop('job_status')

        jobinfo.job_title = data.get('job_title', jobinfo.job_title)
        jobinfo.salary = data.get('salary', jobinfo.salary)
        jobinfo.post_url = data.get('post_url', jobinfo.post_url)
        jobinfo.resource_url = data.get('resource_url', jobinfo.resource_url)
        jobinfo.Description = data.get('Description', jobinfo.Description)

        jobinfo.job_status = jobStatus.objects.get(**jobstatus_data)
        companies = [CompanyInfo.objects.get(**company_data) for company_data in companies_data]

        jobinfo.save()
        jobinfo.companies.set(companies)
        return jobinfo


    class Meta:
        model = JobInfo
        fields = ('id', 'job_title', 'salary', 'post_url', 'created', 'resource_url', 'job_status', 'companies')

