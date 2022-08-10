from django.urls import include, path
from rest_framework import routers
from . import views
from .models import SkillIcon

router = routers.SimpleRouter()
router.register(r'skills', views.SkillViewSet, 'skills')
# router.register(r'projects', views.ProjectsSerializer, 'projects')

# urlpatterns = router.urls

urlpatterns = [
    path('', include(router.urls)),
    path('projects', views.ProjectsViewSet.as_view({'get': 'list',})),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),

]