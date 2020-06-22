lista = [1, 10]

try:
    arquivo = open('teste.txt', 'r')
    # divisao = 10 / 0 # Forçar erro de divisão por 0
    numero = lista[1] # Não existe esse index na lista
    # x = a
    # print('Fechando o arquivo')
    # arquivo.close()

# except BaseException as ex:
#     print('erro desconhecido. Erro: {}'.format(ex))
except ZeroDivisionError:# Classe de exceções
    print('Não é possível realizar uma divisão por 0.')
except ArithmeticError:
    print('Houve um erro ao realizar uma operação aritmética')
# except:
#     print('Erro desconhecido.') # Erro de exceção genérica
except IndexError:
    print('Erro ao acessar um indice inválido da lista')
except BaseException as ex:
    print('erro desconhecido. Erro: {}'.format(ex))
# else:
#     print('Executa quando não ocorre exceção.')
finally:
    print('Sempre executa')
    print('Fechando o arquivo')
    arquivo.close()
