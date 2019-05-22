from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from classtagram.models import User
from classtagram.serializers import UserSerializer, RegisterSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from django.http import JsonResponse, HttpResponse
from django.contrib.auth import login
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