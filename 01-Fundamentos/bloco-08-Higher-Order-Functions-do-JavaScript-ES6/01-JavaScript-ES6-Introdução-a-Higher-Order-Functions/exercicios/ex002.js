// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 
// recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
// O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numRaffle = () => Math.round(Math.random() * (5 - 1) + 1);

const resultRiffle = (func, bet) => {
  console.log(`Numero sorteado: ${func}`);
  console.log(`Numero apostado: ${bet}`);

  if (func === bet) { return 'Parabéns você ganhou'; }
  return 'Tente novamente';
  
};

console.log(resultRiffle(numRaffle(), 3));