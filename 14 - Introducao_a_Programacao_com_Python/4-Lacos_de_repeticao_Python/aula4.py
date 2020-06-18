
# range pega de 0 a 99 e atribui os valores na variavel x
# consegue definir o range definindo os numeros dentro do range, ex: range(1, 100) = de 1 até 99
# for x in range(1, 101):
#     print(x)

# localizar os numeros primos de 0 até 100

# a = int(input('Entre com um valor: '))
#
# div = 0
#
# for x in range(1, a + 1):
#     resto = a % x
#     print(x,  resto)
#
#     if resto == 0:
#         div += 1
#
# # numero primo é divisivel por 0 e por ele mesmo, ou seja, 2 vezes
# if div == 2:
#     print('número {} é primo'.format(a))
# else:
#     print('número {} não é primo'.format(a))


# saber quais são os numeros primos de 0 a 100
# for dentro de for
# a = int(input("Entre com um valor: "))
#
# for num in range(a + 1):
#     div = 0
#
#     for x in range(1, num + 1):
#         resto = num % x
#         #print(x,  resto)
#
#         if resto == 0:
#             div += 1
#
#     # numero primo é divisivel por 0 e por ele mesmo, ou seja, 2 vezes
#     if div == 2:
#         print(num)


# laço while
# a = 0
#
# while a <= 10:
#     print(a)
#     a += 1

a = int(input('primeiro bimestre: '))

while a > 10:
    a = int(input('Entre com a nota correta: '))

b = int(input('segundo bimestre: '))

while b > 10:
    b = int(input('Entre com a nota correta: '))

c = int(input('terceiro bimestre: '))

while c > 10:
    c = int(input('Entre com a nota correta: '))

d = int(input('quarto bimestre: '))

while d > 10:
    d = int(input('Entre com a nota correta: '))

media = (a + b + c + d) / 4
print('media: {}'.format(media))

