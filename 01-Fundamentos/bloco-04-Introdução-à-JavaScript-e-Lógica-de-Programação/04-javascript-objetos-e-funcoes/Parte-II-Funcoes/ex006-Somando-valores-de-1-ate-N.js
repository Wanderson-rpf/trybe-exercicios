// 6 - Crie uma função que receba um número natural (número inteiro não negativo) 
// N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function somaValores(vlrFinal){
  let total = 0;

  for(let i=1;i<=vlrFinal;i++){
    total += i;
  }
  return `O somatório total de 1 ate ${vlrFinal} é ${total}.`
}

console.log(somaValores(50));