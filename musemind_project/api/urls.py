from django.urls import path
from .views import ProjectSuggestionView

urlpatterns = [
    path('suggest/', ProjectSuggestionView.as_view(), name='project-suggestions'),
]