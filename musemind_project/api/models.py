from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    domain = models.CharField(max_length=100)
    tech = models.CharField(max_length=100)
    stack = models.CharField(max_length=200)
    difficulty = models.CharField(max_length=50)
    github_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title