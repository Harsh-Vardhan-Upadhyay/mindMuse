from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Project
from .serializers import ProjectSerializer, PreferenceSerializer
from rest_framework import status
from rest_framework.exceptions import ValidationError

class ProjectSuggestionView(APIView):
    def post(self, request):
        try:
            serializer = PreferenceSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            preferences = serializer.validated_data

            suggestions = Project.objects.filter(
                domain=preferences['domain'],
                tech=preferences['tech'],
                stack__icontains=preferences['stack'],
                difficulty=preferences['proficiency']
            )[:5]

            if not suggestions:
                return Response({"message": "No matching projects found."}, status=status.HTTP_404_NOT_FOUND)

            return Response(ProjectSerializer(suggestions, many=True).data)
        except ValidationError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": "An unexpected error occurred."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)