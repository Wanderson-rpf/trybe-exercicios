// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Com base nessas informações:
// Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).
// Dentro da função crie uma variável result.
// Crie a lógica para retornar o fatorial de N!.
// Imprima no terminal "Esse é o fatorial resultado da função" (Lembre-se de utilizar template literals nesse momento).

const factorial = (number) => {
  let result = 1;

  for (let index = number; index >= 1; index -= 1) {
    result *= index;
  }
  return `Esse é o fatorial resultado da função: ${number}! = ${result}`
}

console.log(factorial(4));

// Solução do professor: recursiva
const factorialRecursiva = number => number > 1 ? number * factorialRecursiva(number - 1) : 1;
console.log(factorialRecursiva(5));
