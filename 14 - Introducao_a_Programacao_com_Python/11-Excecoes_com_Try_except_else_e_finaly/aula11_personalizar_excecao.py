# Criar classe de exceção
# Classe erro herdando de exceção
def Error(Exception):
    pass

# InputError irá herdar da classe Error
def InputError(Error):
    def __init__(self, message): # Método construtor
        self.message = message

while True:
    try:
        x = int(input('Digite o valor da nota: '))
        print(x)
        if x > 10:
            raise IndexError('Nota não pode ser maior que 10.')
        elif x < 0:
            raise IndexError('Nota não pode ser menor que 0.')
        break
    except ValueError:
        print("Valor inválido. Digite apenas números.")
    except IndexError as ex:
        print(ex)