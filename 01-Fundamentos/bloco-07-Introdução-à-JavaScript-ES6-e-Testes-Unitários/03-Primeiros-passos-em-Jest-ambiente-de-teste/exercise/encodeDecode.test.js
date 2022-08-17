const encode  = require('./encode');
const decode  = require('./decode');

describe('Verificaçẽos e teste funçãoes encode e decode', () => {
  it ('Verificando se encode é uma função', () => {
    // 1-Teste se encode e decode são funções;
    expect('function').toBe(typeof(encode));
  });

  it ('Verificando se decode é uma função', () => {
    expect('function').toBe(typeof(decode));
  });

  // Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
  it ('Verificando se a função encode esta convertendo vogais em numeros de 1 a 5', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  // 3-Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
  it ('Verificando se a função decode esta convertendo numeros de 1 a 5 em vogais', () => {
    expect('aeiou').toBe(decode(12345));
  });

  // 4-Teste se as demais letras/números não são convertidos para cada caso;
  it ('Verificando se apenas a vogal "u" é convertida.', () => {
    expect('5b5nt5').toBe(encode('ubuntu'));
  });

  it ('Verificando se apenas o numero "5" é convertido.', () => {
    expect('ubuntu').toBe(decode('5b5nt5'));
  });

  // 5-Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
  it ('Verificando se a string retornada pelo encode tem o mesmo numero de caracteres informado.', () => {
    expect(6).toBe(encode('ubuntu').length);
  });

  it ('Verificando se a string retornada pelo decode tem o mesmo numero de caracteres informado.', () => {
    expect(6).toBe(decode('5b5nt5').length);
  });
});