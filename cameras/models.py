from django.db import models

class Camera(models.Model):
    name = models.CharField(max_length=256)
    address = models.CharField(max_length=2048)

    def to_dict_json(self):
    	return {
    		'name': self.name,
    	}
class NovoUser(models.Model):
    firstname = models.CharField(max_length=30)
    lastname = models.CharField(max_length=40)
    email = models.EmailField()
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=50)

    def to_dict_json(self):
        return{
        'firstname': self.firstname
        }
