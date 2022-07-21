// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let listaPrimos = [];
let contador = 0;
let n = 50;
let maiorValor = 0;

for(let i=2;i<=n;i++){
  for(let x=2;x<=n+1;x++){
    if(i%x===0){
      contador += 1;
    }
  }
  if(contador===1){
    listaPrimos.push(i);
  }
  contador = 0;
}

for(let y=0;y<=listaPrimos.length;y++){
  if(listaPrimos[y]>maiorValor){
    maiorValor = listaPrimos[y];
  }
}

console.log(`A lista de numeros primos de 2 ate ${n} é [${listaPrimos}].`)
console.log(`O maior valor primo entre 2 e ${n} é ${maiorValor}.`)

