const sum = require('./sum');


describe('Testes para função sum()', () => {
  // 1-Teste se o retorno de sum(4, 5) é 9
  it('Verifica se a soma de 4 e 5 é igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  // 2-Teste se o retorno de sum(0, 0) é 0
  it('Verifica se a soma de 0 e 0 é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  // 3-Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
  it('Verifica se mensagem de erro é apresentado ao informar os valores 4 e "5"(string 5)', () => {
    expect(() => sum(4, '5').toThrowError('parameters must be numbers'));
  });
});