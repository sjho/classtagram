from django.shortcuts import render
from rest_framework.authtoken.models import Token
from classtagram.models import User
from classtagram.serializers import UserSerializer, RegisterSerializer 
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from django.http import JsonResponse, HttpResponse
from django.contrib.auth import login
import json
#from django.contrib.auth.models import User
#from rest_auth.registration.views import RegisterView

class Register(APIView):
	queryset = User.objects.all()
	serializer_class = RegisterSerializer

	def perform_create(self, serializer):
		serializer.save()

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
# Create your views here.
