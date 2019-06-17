from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from classtagram.models import Photo
from classtagram.serializers import PhotoSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from django.http import JsonResponse, HttpResponse
from django.contrib.auth import login
import json
#from django.contrib.auth.models import User
#from rest_auth.registration.views import RegisterView

# 사진 추가 뷰
class PhotoList(APIView):
	queryset = Photo.objects.all()
	serializer_class = PhotoSerializer
    
	def get(self, request, format=None):
		photos = Photo.objects.all()
		serializer = PhotoSerializer(photos, many=True)
		return Response(serializer.data)

	def post(self, request, format=None):
		serializer = PhotoSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return JsonResponse({'success':True, 'message':'make photo successfully!'})
		else:
			return JsonResponse({'success':False, 'message':serializer.errors})

# 수업별 사진 get
class PhotoCourseList(APIView):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
    
    def get_object(self, pk):
        try:
            objects = []
            for obj in Photo.objects.all() :
                self.check_object_permissions(self.request, obj)
                if obj.course.id == pk :
                    objects.append(obj)
            return objects
        except Meeting.DoesNotExist:
            raise Http404
   
    def get(self, request, pk, format=None):
        photo = self.get_object(pk)
        serializer = PhotoSerializer(photo, many=True)
        return Response(serializer.data)


# 사진 수정/삭제 뷰
class PhotoDetail(APIView):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer

    def get_object(self, pk):
        try:
            obj = Photo.objects.get(pk=pk)
            self.check_object_permissions(self.request, obj)
            return obj
        except Meeting.DoesNotExist:
            raise Http404
   
    def get(self, request, pk, format=None):
        photo = self.get_object(pk)
        serializer = PhotoSerializer(photo)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        photo = self.get_object(pk)
        serializer = PhotoSerializer(photo, data=request.data)
        if serializer.is_valid():
            serializer.save(user=self.request.user)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        photo = self.get_object(pk)
        photo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)