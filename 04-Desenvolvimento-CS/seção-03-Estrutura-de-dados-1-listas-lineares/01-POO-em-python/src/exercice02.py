from collections import Counter


class Estatistica:
    def __init__(self, numbers):
        self.numbers = numbers

    def media(self):
        return sum(self.numbers) / len(self.numbers)

    def mediana(self):
        numbers_ordered = sorted(self.numbers)
        index = len(numbers_ordered) // 2
        if len(numbers_ordered) % 2 == 0:
            return (numbers_ordered[index - 1] + numbers_ordered[index]) / 2
        return numbers_ordered[index]

    def moda(self):
        number, _ = Counter(self.numbers_ordered).most_common()[0]
        return number
