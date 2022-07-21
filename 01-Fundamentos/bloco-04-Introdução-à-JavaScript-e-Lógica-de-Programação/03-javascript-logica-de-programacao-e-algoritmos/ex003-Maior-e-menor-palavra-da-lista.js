// 3- Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '';

for(let i=0;i<=array.length-1;i+=1){
  if(array[i].length>maiorPalavra.length){
    maiorPalavra = array[i];
  }
}
console.log(`A maior palavra do array é ${maiorPalavra}.`);
//---------------------------------------------------------------
let menorPalavra = array[0];

for(let i=0;i<=array.length-1;i+=1){
  if(array[i].length<menorPalavra.length){
    menorPalavra = array[i];
  }
}
console.log(`A menor palavra do array é ${menorPalavra}.`);
