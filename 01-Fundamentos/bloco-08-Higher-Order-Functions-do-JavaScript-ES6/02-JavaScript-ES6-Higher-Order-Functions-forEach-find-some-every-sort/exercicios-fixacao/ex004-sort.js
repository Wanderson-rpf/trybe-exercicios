// 1 - Utilize sort para ordenar o array pela idade das pessoas em ordem crescente.
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => a.age > b.age ? 1 : (a.age < b.age) ? -1 : 0)
console.log(people);

const peoble2 = people.sort((a, b) => a.age - b.age);
console.log(peoble2)
