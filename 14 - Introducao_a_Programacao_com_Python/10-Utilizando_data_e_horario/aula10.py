from datetime import date, time, datetime, timedelta

def trabalhando_com_date():
    data_atual = date.today()
    # print(data_atual)
    # formatar para o padrão brasileiro
    # strftime = converte para string no formato informado
    # print(data_atual.strftime('%d/%m/%y')) # com o y min = ano 20
    # print(data_atual.strftime('%d/%m/%Y')) # com o Y maiusc = ano 2020
    # print(data_atual.strftime('%A/%B/%Y')) # retorna os nomes dia da semana e mês

    # Uma vez convertido em string não `possível converter de volta
    data_atual_str = data_atual.strftime('%A %B %Y')
    print(type(data_atual))
    print(data_atual_str)
    print(type(data_atual_str))

def trabalhando_com_time():
    horario = time(hour=15, minute=30, second=15)
    print(horario)
    print(type(horario))
    horario_str = horario.strftime('%H:%M:%S')
    print(horario_str)
    print(type(horario_str))

def trabalhando_com_datetime():
    data_atual = datetime.now()
    print(data_atual)
    # Da para filtrar somente o que deseja (data ou hora) quando converter
    print(data_atual.strftime('%d/%m%Y %H:%M:%S'))
    print(data_atual.strftime('%c'))
    # print(data_atual.day)
    # print(data_atual.month)
    # print(data_atual.hour)
    # print(data_atual.minute)
    # print(data_atual.date())
    print(data_atual.weekday())
    # Tupla para exibir qual o nome do dia da semana
    tupla = ('segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo')
    print(tupla[data_atual.weekday()])
    data_criada = datetime(2018, 6, 13, 15, 30, 20) # No mês é somente um digito
    print(data_criada)
    print(data_criada.strftime('%c'))
    # Converter data em string para datetime
    data_string = '01/01/2020 12:20:30'
    data_convertida = datetime.strptime(data_string, '%d/%m/%Y %H:%M:%S')
    print(data_convertida)
    # Subtração e soma de data com timedelta
    # Subtrindo 1 ano, 2 horas e 15 minutos de 'data_convertida'
    nova_data = data_convertida - timedelta(days=365, hours=2, minutes=15)
    print(nova_data)


if __name__ == '__main__':
    # trabalhando_com_date()
    # trabalhando_com_time()
    trabalhando_com_datetime()
