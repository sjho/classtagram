from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from classtagram.models import Request
from classtagram.serializers import RequestSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from django.http import JsonResponse, HttpResponse
from django.contrib.auth import login
import json
#from django.contrib.auth.models import User
#from rest_auth.registration.views import RegisterView

# 강의 추가 뷰
class RequestList(APIView):
	queryset = Request.objects.all()
	serializer_class = RequestSerializer

	def get(self, request, format=None):
		requests = Request.objects.all()
		serializer = RequestSerializer(requests, many=True)
		return Response(serializer.data)

	def post(self, request, format=None):
		serializer = RequestSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save(superuser=self.request.user)
			return JsonResponse({'success':True, 'message':'make request successfully!'})
		else:
			return JsonResponse({'success':False, 'message':'error'})

# 강의 수정/삭제 뷰
class RequestDetail(APIView):
    queryset = Request.objects.all()
    serializer_class = RequestSerializer

    def get_object(self, pk):
        try:
            obj = Request.objects.get(pk=pk)
            self.check_object_permissions(self.request, obj)
            return obj
        except Meeting.DoesNotExist:
            raise Http404
   
    def get(self, request, pk, format=None):
        request = self.get_object(pk)
        serializer = RequestSerializer(request)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        request = self.get_object(pk)
        serializer = RequestSerializer(request, data=request.data)
        if serializer.is_valid():
            serializer.save(user=self.request.user)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        request = self.get_object(pk)
        request.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


