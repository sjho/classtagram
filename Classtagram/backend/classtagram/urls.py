from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from classtagram import views
from django.conf.urls import url

urlpatterns = [
    path('sign_up/', views.SignUp.as_view()),
    path('sign_in/', views.SignIn),
]

urlpatterns=format_suffix_patterns(urlpatterns)

from rest_framework.authtoken import views
urlpatterns += [
    url(r'^api-token-auth/', views.obtain_auth_token),
]

