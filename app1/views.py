from django.http import HttpResponse
from django.shortcuts import render
from .models import BONUS

# Create your views here.
# 'email','first_name','last_name','address
def index(request):
    if request.method =='POST':
        email=request.POST.get('email')
        first_name=request.POST.get('email')
        last_name=request.POST.get('email')
        address=request.POST.get('email')
        bonus=BONUS(email=email,first_name=first_name,last_name=last_name,address=address)
        bonus.save()
        return HttpResponse('<br><br><center><h4>Thanks for response<br> your data submited successfully</h4></center>')
    return render(request,'index.html')