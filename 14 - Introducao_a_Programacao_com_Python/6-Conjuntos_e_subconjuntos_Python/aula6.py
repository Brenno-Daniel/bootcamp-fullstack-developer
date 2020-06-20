conjunto = {1, 2, 3, 4, 4, 2}
# conjunto.add(5) # adicionar um elemento
conjunto.discard(2) # remove um elemento
print(conjunto)

#conjunto = {1, 5, 3, 7, 5}
conjunto2 = {2, 6, 4, 8}
conjunto_uniao = conjunto.union(conjunto2) # uniao de conjuntos
print('Uniâo: {}'.format(conjunto_uniao))

# intersecção entre os conjuntos
conjunto_interseccao = conjunto.intersection(conjunto2)
print('Intersecção: {}'.format(conjunto_interseccao))

# verificar a diferença -Conjuntos_e_subconjuntos_Python
conjunto_diferenca1 = conjunto.difference(conjunto2)
conjunto_diferenca2 = conjunto2.difference(conjunto)
print('Diferença entre 1 e 2: {}'.format(conjunto_diferenca1))
print('Diferença entre 2 e 1: {}'.format(conjunto_diferenca2))

# diferença simetrica simétrica: tudo que não tem nos dois
# aquilo que só tem no 1 e aquilo que só tem no 2
# se o conjunto tiver somente valores iguais então não traz nada
conjunto_diff_simetrica = conjunto.symmetric_difference(conjunto2)
print('Diferença simétrica: {}'.format(conjunto_diff_simetrica))

# Pertinencia:
# Sub-set: isSet se um ci=onjunto é um sub-conjunto do outro conjunto
conjunto_a = {1, 2, 3}
conjunto_b = {1, 2, 3, 4, 5}
conjunto_subset_a = conjunto_a.issubset(conjunto_b) # conjunto B é um sub-conjunto do A
print('B é um sub-conjunto de A: {}'.format(conjunto_subset_a))
conjunto_subset_b = conjunto_b.issubset(conjunto_a) # conjunto A é um sub-conjunto do B
print('A sub-conjunto de B: {}'.format(conjunto_subset_b))

# issuperset: verificar se é um sub-conjunto e se é um super conjunto
conjunto_superset = conjunto_b.issuperset(conjunto_a)
print('B é um superconjunto de A: {}'.format(conjunto_superset))

# Converter uma lista em um conjunto
# Exemplo: quando queremos tirar a duplicidade de uma lista
lista = ['dog', 'dog', 'cat', 'cat', 'ellefant']
print(lista)
conjunto_animais = set(lista) # converter lista em conjunto
print(conjunto_animais)

lista_animais = list(conjunto_animais) # converter conjunto para lista
print(lista_animais)
