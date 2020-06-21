import shutil  # shutil = biblioteca do python
# # criar um arquivo com o builtin open ( consegue acessar ou criar um arquivo)
# #arquivo = open('teste.txt', 'w')
# # se precisa validar se o arquivo existe e atualizar caso exista deve usar o 'a',
# # caso não exista ele cria o arquivo
# arquivo = open('teste.txt', 'a')
# # escrever com 'w' e atualizar com 'a'***
#
# # o write escreve no arquivo e também sobrescreve nele
# arquivo.write('\nSegunda linha')
# # fechar arquivo
# arquivo.close()

def escrever_arquivo(texto):
    # quando não informa o diretorio ele cria no diretorio da aplicação atual (app-python)
    arquivo = open('teste.txt', 'w')
    # especificar um diretorio para criar o arquivo
    # forma 1: Especificar diretamente
    #arquivo = open('/home/brenno/Área de Trabalho/repositorios-Git/teste.txt', 'w')
    # forma 2: Armazendando o diretorio em uma variavel
    #diretorio = '/home/brenno/Área de Trabalho/repositorios-Git/teste.txt'
    arquivo = open(diretorio, 'w')
    arquivo.write(texto)
    arquivo.close()

def atualizar_arquivo(nome_arquivo, texto):
    arquivo = open(nome_arquivo, 'a')
    arquivo.write(texto)
    arquivo.close()

# Ler um arquivo
def ler_arquivo(nome_arquivo):
    arquivo = open(nome_arquivo, 'r')
    texto = arquivo.read()
    print(texto)

def media_notas(nome_arquivo):
    arquivo = open(nome_arquivo, 'r')
    aluno_nota = arquivo.read()
    #print(aluno_nota)
    aluno_nota = aluno_nota.split('\n')
    #print(aluno_nota)
    lista_media = []

    for x in aluno_nota:
        lista_notas = x.split(',')
        aluno = lista_notas[0]
        lista_notas.pop(0) # remover o nome do aluno de dentro da lista, deixando somente as notas
        print(aluno)
        print(lista_notas)
        # list compreention = fazer tudo em uma linha
        # realizando o for, convertendo para inteiro e realizando a soma e dividindo por 4,
        # retornando a média, tudo em uma linha com o lambda
        media = lambda notas: sum([int(i) for i in notas]) / 4
        print(media(lista_notas))
        lista_media.append({aluno:media(lista_notas)}) # colando as medias numa lista
    return lista_media

# Copiar arquivo
def copia_arquivo(nome_arquivo):
    # copiar o arquivo notas para outro diretorio,
    # se não colocar o nome ele mantem o nome original,
    # mas é possível alterar o nome especificando o mesmo
    shutil.copy(nome_arquivo, '/home/brenno/Área de Trabalho/repositorios-Git/')
    # copiando e alterando o nome
    shutil.copy(nome_arquivo, '/home/brenno/Área de Trabalho/repositorios-Git/notas_alunos.txt')

# Mover o arquivo
def move_arquivo(nome_arquivo):
    # como o copiar também é possível alterar o nome do arquivo ao especificar um nome
    shutil.move(nome_arquivo, '/home/brenno/Área de Trabalho/repositorios-Git/')

if __name__ == '__main__':
    move_arquivo('notas.txt')
    #copia_arquivo('notas.txt')
    # lista_media = media_notas('notas.txt')
    # print(lista_media)
    #escrever_arquivo('Primeira linha.\n')
    # aluno = 'Cesar, 6,8, 10, 6\n'
    # atualizar_arquivo('notas.txt', aluno)
    #ler_arquivo('teste.txt')