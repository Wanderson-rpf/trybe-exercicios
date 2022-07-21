// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
let somaValores = 0;

for(let i=0; i<numbers.length;i++){
  somaValores += numbers[i];
}
media = somaValores/numbers.length;
if(media>20){
  console.log(`A média aritmética é maior que 20, valor da média: ${media}`);
}else{
  console.log(`A média aritmética NÃO é maior que 20, valor da média: ${media}`);
}
