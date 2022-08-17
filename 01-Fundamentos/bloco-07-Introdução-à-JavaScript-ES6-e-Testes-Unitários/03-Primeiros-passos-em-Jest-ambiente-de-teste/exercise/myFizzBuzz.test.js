const myFizzBuzz = require('./myFizzBuzz');

describe('Verificações e testes da função myFizzBuzz', () => {
  // 1-Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  it ('Verificando se o número 15 retorna FizzBuzz.', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  // 2-Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  it ('Verificando se o número 9 retorna fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  // 3-Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  it ('Verificando se o núero 10 retorna buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  // 4-Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
  it ('Verificando se o número 7 retorna ele mesmo', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  // 5-Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado.
  it ('Verificando se tem retorno false caso o parâmetro não seja um número.', () => {
    expect(myFizzBuzz('a')).toBe(false);
  });
});