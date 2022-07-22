// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let asterisco = '';
let n = 5;

for(l=1;l<=n;l++){
  for(c=1;c<=n;c++){
    asterisco +='*';
  }
  console.log(asterisco);
  asterisco = '';
}
