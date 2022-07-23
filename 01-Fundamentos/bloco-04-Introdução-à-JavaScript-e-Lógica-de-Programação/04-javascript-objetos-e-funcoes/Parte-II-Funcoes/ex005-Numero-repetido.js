// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

function numerosRepetidos(array){
  let acumulador = [0];
  
  for(let i=0;i<array.length;i++){
    let cont = 0;
    for(let v=0;v<array.length;v++){
      if(array[v]===array[i]){
        cont += 1;
      }
    }
    if(cont > acumulador[0]){
      acumulador=[cont, array[i]];
    }
    cont = 0;
  }
  return `O valor que mais se repete é ${acumulador[1]}.`;
}

console.log(numerosRepetidos([2, 3, 2, 5, 8, 2, 3]));

//Credito da solução a Erick Argollo - Tribo 25A
