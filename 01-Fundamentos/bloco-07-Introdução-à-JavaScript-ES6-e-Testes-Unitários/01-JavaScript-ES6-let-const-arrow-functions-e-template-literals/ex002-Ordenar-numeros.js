// 🚀 Crie uma função que retorne um array em ordem crescente.
// Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => { 
  let arrayOreder = array.sort((a, b) => { return (a > b) ? 1 : ((b > a) ? -1 : 0); }) 
  
  return `Os números ${arrayOreder} se encontram ordenados de forma crescente!`;
}


console.log(sortOddsAndEvens(oddsAndEvens)); 
