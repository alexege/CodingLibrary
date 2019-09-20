from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^new$', views.addNote),
    url(r'^edit/note/(?P<id>\d+)$', views.editNote),
    url(r'^delete/note/(?P<id>\d+)$', views.deleteNote),
    url(r'^new/comment/(?P<id>\d+)$', views.addNoteComment),
    url(r'^edit/comment/(?P<id>\d+)$', views.editNoteComment),
    url(r'^delete/comment/(?P<id>\d+)$', views.deleteNoteComment),
    url(r'^new/category/$', views.addCategory),
    url(r'^new/subcategory/(?P<id>\d+)$', views.addSubCategory)
]