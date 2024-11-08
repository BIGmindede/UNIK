from django.urls import path
from django.views.decorators.cache import cache_page

from fio.views import FIOApiView, analyze

urlpatterns = [
    path('hitrov/', FIOApiView.as_view()),
    path('analyze/', analyze),
]

