from django.shortcuts import render
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from classtagram.models import User, Course, Photo, Tag
from classtagram.serializers import UserSerializer, RegisterSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from django.http import JsonResponse, HttpResponse
from django.contrib.auth import login
from django.http import Http404
import json
#from django.contrib.auth.models import User
#from rest_auth.registration.views import RegisterView

# 회원가입 뷰
class Register(APIView):
	queryset = User.objects.all()
	serializer_class = RegisterSerializer

	def get(self, request, format=None):
		users = User.objects.all()
		serializer = RegisterSerializer(users, many=True)
		return Response(serializer.data)


	def post(self, request, format=None):
		serializer = RegisterSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return JsonResponse({'success':True, 'message':'register successed!'})
		else:
			return JsonResponse({'success':False, 'message':'error'})

	#def perform_create(self, serializer):
	#	serializer.save()


# 강의 수정/삭제 뷰
class UserDetail(APIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self, pk):
        try:
            obj = User.objects.get(pk=pk)
            self.check_object_permissions(self.request, obj)
            return obj
        except User.DoesNotExist:
            raise Http404
   
    def get(self, request, pk, format=None):
        User = self.get_object(pk)
        serializer = UserSerializer(User)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        User = self.get_object(pk)
        serializer = UserSerializer(User, data=request.data)
        if serializer.is_valid():
            serializer.save(user=self.request.user)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        User = self.get_object(pk)
        User.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# 수업별 유저 get
class UserCourseList(APIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def get_object(self, pk):
        try:
            course = Course.objects.get(pk=pk)
            objects = course.users.all()
            return objects
        except User.DoesNotExist:
            raise Http404
   
    def get(self, request, pk, format=None):
        users = self.get_object(pk)
        serializer = UserSerializer(users, many=True)

        for uobj in serializer.data :
            count = Tag.objects.filter(course=pk, user=uobj['id']).count()
            wholecount = Photo.objects.filter(course=pk).count()
            uobj.update({'wholecount':wholecount})
            uobj.update({'count':count})

        return Response(serializer.data)

# 로그인 뷰
@csrf_exempt
def Login(request):
	body = json.loads(request.body)
	username = body['username']
	pwd = body['password']

	try:
		user = User.objects.get(username=username)
		if not user.check_password(pwd):
			return JsonResponse({'success':False, 'message':'error'})
 
		login(request, user)
		token, _ = Token.objects.get_or_create(user=user)

		return JsonResponse({'success':True,'token': token.key, 'user': user.id, 'message':'login successed!'})

	except Exception as e:
		return JsonResponse({'success':False, 'message':'error'})