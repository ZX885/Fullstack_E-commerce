from django.contrib.auth.models import User
from django.db import models
from PIL import Image
import os


class Foods(models.Model):
    name = models.CharField(max_length=100)
    quantity =models.IntegerField()
    price = models.IntegerField()
    category = models.CharField( max_length=100)
    image = models.ImageField(upload_to='foods/media',
                              default='food.jpg')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def save(self, *args, **kwargs):
        super(Foods, self).save(*args, **kwargs)

        try:
            img = Image.open(self.image.path)
            if img.height > 600 or img.width > 600:
                output_size = (600, 600)
                img.thumbnail(output_size)
                img.save(self.image.path)
        except Exception as e:
            print(f"Image resize error: {e}")

    def delete(self, *args, **kwargs):
        image_url = self.image.path
        if self.image.name != 'food.jpg' and os.path.isfile(self.image.path):
            os.remove(self.image.path)
        super().delete(*args, **kwargs)
    def __str__(self):
        return self.name



class Wishlist(models.Model):
    foods = models.ManyToManyField("Foods",null=True, blank=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    # def __str__(self):
    #     return f"Wishlist of {self.owner.username}"

    