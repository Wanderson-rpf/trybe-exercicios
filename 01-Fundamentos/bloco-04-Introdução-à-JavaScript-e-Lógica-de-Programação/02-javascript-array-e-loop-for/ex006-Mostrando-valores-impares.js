// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let listaImpares = [];

for(i=0;i<numbers.length;i++){
  if(numbers[i]%2!==0){
    listaImpares.push(numbers[i]);
  }
}
console.log(listaImpares);
if(listaImpares.length>0){
  console.log(`Foram encontrados ${listaImpares.length} números ímapres, são eles ${listaImpares}`)
}else{
  console.log(`Nenhum valor ímpar encontrado.`)
}
