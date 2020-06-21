class Calculadora:
    # neste caso também seria possível executar sem o init
    def __init__(self): # self é para referenciar o próprio objeto
        pass # pass não faz nada, somente para não ficar vazio

    def soma(self, valor_a, valor_b):
        return valor_a + valor_b

    def subtracao(self, valor_a, valor_b):
        return valor_a - valor_b

    def multiplicacao(self, valor_a, valor_b):
        return valor_a * valor_b

    def divisao(self, valor_a, valor_b):
        return valor_a / valor_b

# neste caso não precisamos instanciar a calculadora
# já com os valores.
calculadora = Calculadora()

# na chamada da função passamos os valores
print(calculadora.soma(10, 2))
print(calculadora.subtracao(5, 3))
print(calculadora.multiplicacao(10, 5))
print(calculadora.divisao(100, 2))

