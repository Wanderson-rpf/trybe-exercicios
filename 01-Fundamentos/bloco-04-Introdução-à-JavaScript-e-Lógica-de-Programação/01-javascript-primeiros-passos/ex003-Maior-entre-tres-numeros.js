console.log('-->Execicio 3:');
// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const n1 = 20;
const n2 = 30;
const n3 = 10;

if(n1>n2 && n1>n3){
  console.log(`O maior número é ${n1}`)
}else if(n2>n1 && n2>n3){
  console.log(`O maior número ${n2}`)
}else{
  console.log(`O maior número é ${n3}`)
}
