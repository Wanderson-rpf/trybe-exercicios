// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let array =[];
let arrayDivisao = [];

for(let i=1;i<=25;i++){
  array.push(i)
}
console.log(`Array de 1 até 25 criado.`);

for(let v=0;v<=array.length;v++){
  arrayDivisao.push(v/2);
}
console.log(`Array coim valores divididos por 2: ${arrayDivisao}`);