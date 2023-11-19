# Create your views here.
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView

from home.models import Contact


class HomePageView(CreateView):
    model = Contact
    template_name = "home.html"
    fields = ["name", "email", "subject", "message"]
    success_url = reverse_lazy("home")
