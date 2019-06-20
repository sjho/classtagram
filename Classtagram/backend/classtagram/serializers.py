from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from classtagram.models import User, Course, Request, Photo, Tag

# 회원가입 시리얼라이저
class RegisterSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('username', 'password', 'is_student', 'name', 'student_number', 'school', 'major')

# 유저 정보 - 강의 시리얼라이저
class UserCourseSerializer(serializers.ModelSerializer):
	superuser = serializers.ReadOnlyField(source='superuser.id')
	users = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), many=True)

	class Meta:
		model = Course
		fields = ('id', 'coursename', 'superuser', 'users')

# 유저 정보를 불러오는 시리얼라이저
class UserSerializer(serializers.ModelSerializer):
	courses = UserCourseSerializer(source='courses_user', read_only=True, many=True)
	
	class Meta:
		model = User
		fields = ('id','username', 'is_student', 'name', 'student_number', 'school', 'major', 'courses')
		read_only_fields = ('username', 'is_student',)

# 강의 등록 시리얼라이저
class CourseSerializer(serializers.ModelSerializer):
#	users = UserSerializer(read_only=True, many=True)

	class Meta:
		model = Course
		fields = ('id', 'coursename', 'superuser', 'users')

# 강의 등록 요청 시리얼라이저
class RequestSerializer(serializers.ModelSerializer):

	class Meta:
		model = Request
		fields = ('id', 'user', 'course')

# 강의 등록 요청 시리얼라이저
class RequestShowSerializer(serializers.ModelSerializer):
	user = UserSerializer()

	class Meta:
		model = Request
		fields = ('id', 'user', 'course')

# 사진 시리얼라이저
class PhotoSerializer(serializers.ModelSerializer):

	class Meta:
		model = Photo
		fields = ('id', 'course', 'photo', 'created')

# 사진 시리얼라이저
class PhotoCourseSerializer(serializers.ModelSerializer):
	is_checked = serializers.BooleanField(initial=True)

	class Meta:
		model = Photo
		fields = ('id', 'course', 'photo', 'created', 'is_checked')

# 태그 시리얼라이저
class TagSerializer(serializers.ModelSerializer):

	class Meta:
		model = Tag
		fields = ('id', 'user', 'course', 'photo', 'x', 'y')

	def validate(self, data):
		for t in Tag.objects.all():
			if (self.instance and self.instance.id == t.id) :
				continue
			if not (data.get('user').id == t.user.id and data.get('photo').id == t.photo.id):
				continue
			raise serializers.ValidationError("Already checked")
		return data

class TagShowSerializer(serializers.ModelSerializer):
	user = UserSerializer()

	class Meta:
		model = Tag
		fields = ('id', 'user', 'course', 'photo', 'x', 'y')