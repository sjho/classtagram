from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from classtagram.models import User

# 회원가입 시리얼라이저
class RegisterSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('username', 'password', 'is_student', 'name', 'student_number', 'school', 'major')


# 유저 정보를 불러오는 시리얼라이저
class UserSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = User
		fields = ('username', 'is_student', 'name', 'student_number', 'school', 'major')
		read_only_fields = ('username', 'is_student',)
