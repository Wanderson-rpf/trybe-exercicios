'''
Crie uma função que receba os três lado de um triângulo e informe qual o tipo
de triângulo formado ou 'não é triangulo', caso não seja possível formar
um triângulo.
'''


def type_triangle():
    a = float(input('Informe o comprimento da primeira reta: '))
    b = float(input('Informe o comprimento da segunda reta: '))
    c = float(input('Informe o comprimento da terceira reta: '))

    if a < b + c and b < a + c and c < a + b:
        print('As retas informadas podem fazer um triangulo.')
        if a == b and a == c:
            print(
                'Este triangulo tem todos os lados iguais,'
                'por isso é um triangulo EQUILATERO '
            )
        elif a == b or a == c or b == c:
            print(
                'Este triangulo tem dois lados iguais,'
                'por isso é um triangulo ISOCELES'
            )
        else:
            print(
                'Este triangulo possui todos os lados diferentes,'
                'por isso é um triangulo ESCALENO'
            )
    else:
        print('As retas informadas não podem fazer um triangulo.')
    print(f'As retas informadas foram a:{a}, b:{b} e c:{c}')


type_triangle()
