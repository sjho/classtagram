from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from classtagram.models import Course
from classtagram.serializers import CourseSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from django.http import JsonResponse, HttpResponse
from django.contrib.auth import login
import json
#from django.contrib.auth.models import User
#from rest_auth.registration.views import RegisterView

# 강의 추가 뷰
class CourseList(APIView):
	queryset = Course.objects.all()
	serializer_class = CourseSerializer
    
	def get(self, request, format=None):
		courses = Course.objects.all()
		serializer = CourseSerializer(courses, many=True)
		return Response(serializer.data)

	def post(self, request, format=None):
		serializer = CourseSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save(superuser=self.request.user)
			return JsonResponse({'success':True, 'message':'make course successfully!'})
		else:
			return JsonResponse({'success':False, 'message':'error'})

# 강의 수정/삭제 뷰
class CourseDetail(APIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    def get_object(self, pk):
        try:
            obj = Course.objects.get(pk=pk)
            self.check_object_permissions(self.request, obj)
            return obj
        except Meeting.DoesNotExist:
            raise Http404
   
    def get(self, request, pk, format=None):
        course = self.get_object(pk)
        serializer = CourseSerializer(course)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        course = self.get_object(pk)
        serializer = CourseSerializer(course, data=request.data)
        if serializer.is_valid():
            serializer.save(user=self.request.user)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        course = self.get_object(pk)
        course.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)