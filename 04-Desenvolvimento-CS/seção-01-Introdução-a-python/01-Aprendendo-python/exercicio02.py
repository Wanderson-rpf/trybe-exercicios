# Calcule a média aritmética dos valores contidos em uma lista.


def arithmeticAverage(listNumbers):
    average = sum(listNumbers) / len(listNumbers)
    print(f"A media dos numeros da lista é: {average}")


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arithmeticAverage(numbers)
