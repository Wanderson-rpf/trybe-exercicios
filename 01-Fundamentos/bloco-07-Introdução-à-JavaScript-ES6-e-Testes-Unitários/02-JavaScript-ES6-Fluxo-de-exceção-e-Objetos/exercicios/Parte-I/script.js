// Aparentemente está tudo funcionando, mas a aplicação não possui fluxo de exceção. Ou seja, caso ocorra um erro, 
// eles não serão tratados. Que tal resolver isso?

// 1 🚀 - Crie erros personalizados.
// Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?

// Utilize o throw new Error e o bloco try/catch.

// Evite funções que tenham muitas responsabilidades distintas.

// Caso a pessoa usuária nao preencha nenhum input, ou preencha apenas um input, lance um erro.

// Caso os valores inseridos nos inputs pela pessoa usuária não sejam números, lance um erro. Para isso você pode 
// utilizar a função isNan().

// Adicione o texto do erro no parágrafo com id result, para que a pessoa usuária saiba o que aconteceu. Lembre-se 
// de usar erros descritivos!

// Utilize o finally para apagar os valores dos inputs ao final do bloco try/catch.

const validValue = (val1, val2) => {
  if (!val1 || !val2) { // * Verificando se ambos os valores foram preenchidos
    throw new Error('Informe os valores para realizar a soma.');
  }
  if (isNaN(val1) || isNaN(val2)) { // * Verificando se os valores são numeros
    throw new Error('Os valores precisam ser números.');
  }
};

function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;

    validValue(value1, value2);

    const result = Number(value1) + Number(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;

  } catch (err) {
    document.getElementById('result').innerHTML = `Erro: ${err.message}`;

  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }

}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}