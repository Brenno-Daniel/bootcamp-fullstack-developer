class Televisao:
    def __init__(self):
        self.ligada = False
        self.canal = 5

    def power(self):
        if self.ligada: # já entende como True (TV ligada) e entra na condição
        #if not self.ligada: # para entender como False(TV desligada)
            self.ligada = False
        else:
            self.ligada = True

    def aumenta_canal(self):
        if self.ligada:
            self.canal += 1
        else:
            print('A TV deve estar ligada.')

    def diminui_canal(self):
        if self.ligada:
            self.canal -= 1
        else:
            print('A TV deve estar ligada.')

if __name__ == '__main__': # testar importação de modulos
    televisao = Televisao()
    print('Televisão está ligada: {}'.format(televisao.ligada)) # False
    televisao.power()
    print('Televisão está ligada: {}'.format(televisao.ligada)) # True
    televisao.power()
    print('Televisão está ligada: {}'.format(televisao.ligada)) # False novamente

    print('Canal: {}'.format(televisao.canal))
    televisao.aumenta_canal()
    print('Canal: {}'.format(televisao.canal))
    televisao.power()
    print('Televisão está ligada: {}'.format(televisao.ligada))
    televisao.aumenta_canal()
    print('Canal: {}'.format(televisao.canal))