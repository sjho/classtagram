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


		

class User(AbstractBaseUser):
	username = models.CharField(max_length=100, unique=True)
	name = models.CharField(max_length=100)
	student_number = models.CharField(max_length=15)
	school = models.CharField(max_length=100)
	major = models.CharField(max_length=100)
	is_student = models.BooleanField(default=True)
	
	objects = UserManager()

	USERNAME_FIELD = 'username'
	REQUIRED_FIELDS = []

	def check_password(self, raw_password):
		return self.password == raw_password

	def __str__(self):
		return self.username

	class Meta:
		ordering = ('id',)	
