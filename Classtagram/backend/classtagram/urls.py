from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from classtagram import views
from django.conf.urls import url

urlpatterns = [
    path('register/', views.Register.as_view()),
    path('login/', views.Login),
    path('users/<int:pk>', views.UserDetail.as_view()),
    path('courses/', views.CourseList.as_view()),
    path('courses/<int:pk>', views.CourseDetail.as_view()),
    path('requests/', views.RequestList.as_view()),
    path('requests/<int:pk>', views.RequestDetail.as_view()),
    path('photos/', views.PhotoList.as_view()),
    path('photos/course/<int:pk>', views.PhotoCourseList.as_view()),
    path('photos/user/<int:pk>', views.PhotoUserList.as_view()),
    path('photos/<int:pk>', views.PhotoDetail.as_view()),
    path('tags/', views.TagList.as_view()),
    path('tags/photo/<int:pk>', views.TagPhotoList.as_view()),
    path('tags/<int:pk>', views.TagDetail.as_view()),
]

urlpatterns=format_suffix_patterns(urlpatterns)

from rest_framework.authtoken import views
urlpatterns += [
    url(r'^api-token-auth/', views.obtain_auth_token),
]

