import requests

def retorna_dados_cep(cep):
    response = requests.get('https://viacep.com.br/ws/{}/json/'.format(cep))
    print(response.status_code) # retornar 200 é sucesso, 400 não existe (not found)
    # print(response.text) # Retornar o texto da requisição
    # print(type(response.text)) # Tipo string
    print(response.json()) # Retorna em formato de dicionário
    # print(type(response.json())) # Tipo dict: dicionário

    # No formato dicionário conseguimos acessar os dados da API
    # dados_cep = response.json()
    # print(dados_cep['logradouro'])
    # print(dados_cep['complemento'])
    # print(dados_cep['bairro'])
    # print(dados_cep['localidade'])
    # print(dados_cep['uf'])

def retorna_dados_pokemon(pokemon):
    response = requests.get('https://pokeapi.co/api/v2/pokemon/{}/'.format(pokemon))
    dados_pokemon = response.json()
    return dados_pokemon

# Requisição de site normal
def retorna_response(url):
    response = requests.get(url)
    return response.text

if __name__ == '__main__':
    response = retorna_response('https://web.digitalinnovation.one/labs')
    print(response) # Retornar a página html do site
    retorna_dados_cep('12216340')
    dados_pokemon = retorna_dados_pokemon('bulbasaur')
    print(dados_pokemon['sprites']['front_shiny'])


