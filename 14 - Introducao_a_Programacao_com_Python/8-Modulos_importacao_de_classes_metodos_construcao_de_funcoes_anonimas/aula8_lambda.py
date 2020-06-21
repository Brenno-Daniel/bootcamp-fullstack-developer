# nome da função,
# lambda para dizer que é uma função anonima,
# um parametro que é necessário, no caso lista,
# devolver uma lista e quantas letras tem cada palavra dentro da lista
contador_letras = lambda lista: [len(x) for x in lista]

lista_animais = ['cachorro', 'gato', 'elefante']

print(contador_letras(lista_animais))

#Calculadora com lambda
soma = lambda a, b: a + b
subtracao = lambda a, b: a - b

print(soma(5, 10))
print(subtracao(10, 5))

# Calculadora com dicionario de funções lambda
calculadora = {
    'soma': lambda a, b: a + b,
    'subtracao': lambda a, b: a - b,
    'multiplicacao': lambda a, b: a * b,
    'divisao': lambda a, b: a / b,
}

print(type(calculadora)) # tipo: dict = dicionário
soma = calculadora['soma']
#soma = lambda a, b: a + b
multiplicacao = calculadora['multiplicacao']
print('A soma é: {}'.format(soma(10, 5)))
print('A multiplicação é: {}'.format(multiplicacao(10, 2)))
