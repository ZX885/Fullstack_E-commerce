from django.contrib.auth.models import User
from django.db import models
from PIL import Image
# from django.utils import timezone

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='default.png', upload_to="profile_pics", )

    
    def __str__(self):
        return f'{self.user.username} Profile'
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        print(f'{self.image.path=}')
        img = Image.open(self.image.path)
        
        if img.height> 300 or img.width>300:
            output_size = (300,300)
            img.thumbnail(output_size)
            img.save(self.image.path)
    