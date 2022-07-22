// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let numero = 10;
let f = 1;

console.log(`O fatorial de !${numero} é:`)
for(let i=numero;i>=1;i--){
  f*= i;
  console.log(`${numero} x ${i} = ${f}`);
}