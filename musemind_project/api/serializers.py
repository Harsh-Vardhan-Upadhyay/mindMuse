from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'domain', 'tech', 'stack', 'difficulty', 'github_link']

class PreferenceSerializer(serializers.Serializer):
    DOMAIN_CHOICES = [
        ('Health', 'Health'),
        ('Finance', 'Finance'),
        ('Education', 'Education'),
        ('Entertainment', 'Entertainment'),
        ('Technology', 'Technology'),
    ]

    TECH_CHOICES = [
        ('Web Development', 'Web Development'),
        ('Mobile Development', 'Mobile Development'),
        ('Machine Learning', 'Machine Learning'),
        ('Data Science', 'Data Science'),
        ('AI Development', 'AI Development'),
    ]

    PROFICIENCY_CHOICES = [
        ('Beginner', 'Beginner'),
        ('Intermediate', 'Intermediate'),
        ('Advanced', 'Advanced'),
    ]

    domain = serializers.ChoiceField(choices=DOMAIN_CHOICES)
    tech = serializers.ChoiceField(choices=TECH_CHOICES)
    stack = serializers.CharField(max_length=200)
    proficiency = serializers.ChoiceField(choices=PROFICIENCY_CHOICES)