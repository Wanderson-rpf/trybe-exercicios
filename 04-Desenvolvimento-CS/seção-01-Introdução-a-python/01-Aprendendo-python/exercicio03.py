"""
Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na
tela um quadrado feito de asteriscos de lado de tamanho n.
"""


def square_of_asterisk():
    number = int(input("Informe um numero para montar o quadrado: "))
    for n in range(number):
        for i in range(number):
            print("*", end=" ")
        print()


square_of_asterisk()
