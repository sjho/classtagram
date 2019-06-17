from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Create your models here.
class UserManager(BaseUserManager):
	use_in_migrations = True
	
	def create_user(self, username, password, name, is_student, student_number, school, major):
		user = self.model(
			username=username,
			name = name,
			is_student = is_student,
			student_number=student_number,
			school=school,
			major=major,
		)
		user.set_password(password)
		user.save(using=self._db)
		return user

	def create_superuser(self, username, password, name, is_student, student_number, school, major):
		user = self.model(
			username=username,
			name = name,
			is_student = is_student,
			student_number=student_number,
			school=school,
			major=major,
		)
		user.admin = True
		user.set_password(password)
		user.save(using=self._db)
		return user

# 사용자 정의 유저 모델
class User(AbstractBaseUser):
	username = models.CharField(max_length=100, unique=True)
	name = models.CharField(max_length=100)
	student_number = models.CharField(max_length=15)
	school = models.CharField(max_length=100)
	major = models.CharField(max_length=100)
	is_student = models.BooleanField(default=True)
	is_staff = models.BooleanField(default=False)
	admin = models.BooleanField(default=False)
	
	objects = UserManager()

	USERNAME_FIELD = 'username'
	REQUIRED_FIELDS = []

	def check_password(self, raw_password):
		return self.password == raw_password

	def __str__(self):
		return self.username

	class Meta:
		ordering = ('id',)	


# 강의 모델
class Course(models.Model):
	coursename = models.CharField(max_length=100, unique=True)
	superuser = models.ForeignKey(User, related_name='courses', on_delete=models.CASCADE)
	users = models.ManyToManyField(User, related_name='courses_user')

# 강의 등록 요청 모델
class Request(models.Model):
	user = models.ForeignKey(User, related_name='requests', on_delete=models.CASCADE)
	course = models.ForeignKey(Course, related_name='requests', on_delete=models.CASCADE)

# 사진 모델
class Photo(models.Model):
	course = models.ForeignKey(Course, related_name='photos', on_delete=models.CASCADE)
	photo = models.ImageField(null=True, upload_to='media')
	created = models.DateTimeField(auto_now_add=True)

# 태그 모델
class Tag(models.Model):
	user = models.ForeignKey(User, related_name='tags', on_delete=models.CASCADE)
	course = models.ForeignKey(Course, related_name='tags', on_delete=models.CASCADE)
	photo= models.ForeignKey(Photo, related_name='tags', on_delete=models.CASCADE)
	x = models.FloatField()
	y = models.FloatField()