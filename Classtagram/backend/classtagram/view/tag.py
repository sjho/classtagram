from django.shortcuts import render
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from classtagram.models import Tag
from classtagram.serializers import TagSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from django.http import JsonResponse, HttpResponse
from django.contrib.auth import login
import json
#from django.contrib.auth.models import User
#from rest_auth.registration.views import RegisterView

# 강의 추가 뷰
class TagList(APIView):
	queryset = Tag.objects.all()
	serializer_class = TagSerializer
    
	def get(self, request, format=None):
		tags = Tag.objects.all()
		serializer = TagSerializer(tags, many=True)
		return Response(serializer.data)

	def post(self, request, format=None):
		serializer = TagSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return JsonResponse({'success':True, 'message':'make tag successfully!'})
		else:
			return JsonResponse({'success':False, 'message':'error'})

class TagPhotoList(APIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    
    def get_object(self, pk):
        try:
            objects = []
            for obj in Tag.objects.all() :
                self.check_object_permissions(self.request, obj)
                if obj.photo.id == pk :
                    objects.append(obj)
            return objects
        except Meeting.DoesNotExist:
            raise Http404
   
    def get(self, request, pk, format=None):
        tag = self.get_object(pk)
        serializer = TagSerializer(tag, many=True)
        return Response(serializer.data)

# 강의 수정/삭제 뷰
class TagDetail(APIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    def get_object(self, pk):
        try:
            obj = Tag.objects.get(pk=pk)
            self.check_object_permissions(self.request, obj)
            return obj
        except Meeting.DoesNotExist:
            raise Http404
   
    def get(self, request, pk, format=None):
        tag = self.get_object(pk)
        serializer = TagSerializer(tag)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        tag = self.get_object(pk)
        serializer = TagSerializer(tag, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        tag = self.get_object(pk)
        tag.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)