from django.db import models
#não vou usar
class Camera(models.Model):
    name = models.CharField(max_length=256)
    address = models.CharField(max_length=2048)

    def to_dict_json(self):
    	return {
    		'name': self.name,
    	}
class Pergunta(models.Model):
    idUser = models.IntegerField()
    pergunta = models.TextField()

    def to_dict_json(self):
        return{
            'idUser': self.idUser,
            'pergunta': self.pergunta
        }

class Resposta(models.Model):
    idPergunta = models.IntegerField()
    idUser = models.IntegerField()
    resposta = models.TextField()

    def to_dict_json(self):
        return{
            'idPergunta': self.idPergunta,
            'idUser': self.idUser,
            'resposta': self.resposta,
        }
