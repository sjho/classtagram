from django.shortcuts import render
from classtagram.models import User
from classtagram.serializers import UserSerializer, RegisterSerializer 
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from django.http import JsonResponse
import json
#from django.contrib.auth.models import User
#from rest_auth.registration.views import RegisterView

class SignUp(generics.ListCreateAPIView):
	queryset = User.objects.all()
	serializer_class = RegisterSerializer

	def perform_create(self, serializer):
		serializer.save()

@csrf_exempt
def SignIn(request):
	body = json.loads(request.body)
	username = body['username']
	pwd = body['password']

	try:
		user = User.objects.get(username=username)
		if not user.check_password(pwd):
			return HttpResponse(status=404)
 
		login(request, user)
		token, _ = Token.objects.get_or_create(user=user)

		return JsonResponse({'token': token.key, 'user': user.id})

	except Exception as e:
		return HttpResponse(status=404)
# Create your views here.
