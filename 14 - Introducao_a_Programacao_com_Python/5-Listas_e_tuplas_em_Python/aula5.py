lista = [15, 10, 9, 7] # consegue ter tipos diferentes em uma lista, ex: int e string
lista_animal = ['cachorro', 'gato', 'elefante', 'lobo', 'arara']
#print(lista_animal[1]) # acessar o objeto pelo indice

# percorrer a lista pelo laço for
# for x in lista_animal:
#     print(x)

# somar os valores
# soma = 0
# for x in lista:
#     print(x)
#     soma += x
# print(soma)

# somar todos os valores e exibir somente o resultado utilizando sum
# importancia de se utilizar somente um tipo na lista**
#print(sum(lista))

# buscar maior valor da lista com max
# independente da posição do maior numero
# print(max(lista))
# menor valor com min
# print(min(lista))
# É possível utilizar com listas de string
# Busca de acordo com a primeira letra
# print(max(lista_animal))
# print(min(lista_animal))

# Utilizar condicional na lista
# if 'gato' in lista_animal:
#     print('eu acho que vi um gatinho')
# else:
#     print('não existe gato na lista')

# Consegue multiplicar uma lista
# nova_lista = lista_animal * 3
# print(nova_lista)

# Incluindo animal na lista com o append()
# if 'lobo' in lista_animal:
#     print('já existe um lobo na lista')
# else:
#     print('não tem um lobo na lista, será adicionado na lista.')
#     lista_animal.append('lobo')
#     print(lista_animal)

# Remover o ultimo iten da pilha com pop()
# print('agora será removido o ultimo valor da lista.')
# lista_animal.pop()
# print(lista_animal)

# É possível remover um objeto especifico pelo indice também
# print('removando o indice 2 da lista')
# lista_animal.pop(2)
# print(lista_animal)

# Pode-se remover através do nome com o remove()
# lista_animal.remove('elefante')
# print(lista_animal)

# Ordenar uma lista com o sort()
# print('ordenando a lista')
# lista.sort()
# lista_animal.sort()
# print(lista)
# print(lista_animal)
# # Reverter a lista com o reverse()
# print('revertendo a lista')
# lista.reverse()
# lista_animal.reverse()
# print(lista)
# print(lista_animal)

# Alterar um valor da lista
# print(lista)
# lista[0] = 1
# print(lista)

# TUPLAS
tupla = (1, 10, 12, 14)
# print(tupla[0]) # consegue acessar uma posição especifica também

# É possível saber quantos elementos tem uma tupla e uma lista com len
# print(len(tupla))
# print(len(lista))
# print(len(lista_animal))

# Usando conversões
# Converter tupla em lista
tupla_animal = tuple(lista_animal)
print(type(tupla_animal))
print(tupla_animal)

lista_numerica = list(tupla)
print(type(lista_numerica))
print(lista_numerica)

lista_numerica[0] = 100
print(lista_numerica)
