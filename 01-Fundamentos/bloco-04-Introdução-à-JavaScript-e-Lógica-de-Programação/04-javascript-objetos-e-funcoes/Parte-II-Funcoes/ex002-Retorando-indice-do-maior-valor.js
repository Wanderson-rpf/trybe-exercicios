// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function arrayInt(array){
  let maiorIndice = array[0];
  for(let i=0;i<array.length;i++){
    if(array[i]>maiorIndice){
      maiorIndice = i;
    }
  }
  return `Dado o array [${array}] o indice do maior valor é ${maiorIndice}.`;
}
console.log(arrayInt([2, 3, 6, 7, 10, 1]));
