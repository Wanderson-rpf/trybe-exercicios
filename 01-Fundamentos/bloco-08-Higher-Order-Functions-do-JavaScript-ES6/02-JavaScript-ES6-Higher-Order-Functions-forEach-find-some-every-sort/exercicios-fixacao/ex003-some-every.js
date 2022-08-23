// 1 - Escreva uma função que recebe dois parâmetros: o primeiro um array de nomes e o segundo, 
// um nome qualquer. Essa função deve retornar true se o segundo parâmetro - um nome qualquer - estiver
// contido no primeiro parâmetro - array de nomes. Caso não esteja contido, deve retornar false.
// Dica: use some.
console.log('<--------------- Exercicio com some() --------------->')
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  const searchName = arr.some((item) => item === name);
  return searchName;
}

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Carlos'));

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade 
// maior ou igual a mínima e caso contrário false, use every;
console.log('<--------------- Exercicio com every() --------------->')
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  const ageEncontred = Object.values(arr).every((ageFilter) => { minimumAge >= ageFilter.age });
  return ageEncontred;
}

console.log(verifyAges(people, 18));

