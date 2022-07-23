// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function arrayInt(array){
  let menorIndice = array[0];
  for(let i=0;i<array.length;i++){
    if(array[i]<menorIndice){
      menorIndice = i;
    }
  }
  return `Dado o array [${array}] o indice do menor valor é ${menorIndice}.`;
}
console.log(arrayInt([2, 4, 6, 7, 10, 0, -3]));
