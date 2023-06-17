"""
Crie uma função que receba uma lista de nomes e retorne o nome com a maior
quantidade de caracteres.
Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
o retorno deve ser "Fernanda".
"""


def biggest_name(listNames):
    qtd_letter = 0
    name_selected = ''
    for name in listNames:
        if len(name) > qtd_letter:
            name_selected = name
            qtd_letter = len(name)
    print(f'O maior nome é: {name_selected}')


names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana", 'Wanderson']
biggest_name(names)
