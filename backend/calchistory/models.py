from django.db import models

# Create your models here.
class History(models.Model):
    result = models.DecimalField(max_digits=100,decimal_places=3)
    content = models.CharField(max_length=120)

    def _str_(self):
        return self.content
