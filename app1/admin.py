from django.contrib import admin
from . models import BONUS

# Register your models here.
class displaybonus(admin.ModelAdmin):
    list_display = ('email','first_name','last_name','address') 

admin.site.register(BONUS,displaybonus)    