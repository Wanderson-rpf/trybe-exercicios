# Crie uma função que receba dois números e retorne o maior deles.


def higherNumbers():
    '''Esta função recebe dois numeros e informa qual deles é o maior.'''
    number1 = int(input("Informe o primeiro numero: "))
    number2 = int(input("Informe o segundo numero: "))

    if number1 > number2:
        higher = number1
    else:
        higher = number2

    print(f"Dos numeros fornecidos, o maior é: {higher}")


higherNumbers()
# print(higherNumbers.__doc__)
