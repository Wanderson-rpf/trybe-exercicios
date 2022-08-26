// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas 
// australianas que nasceram no século 20:

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];
//bornIn: nascido em

// escreva filterPeople abaixo
// ! Com reduce não deu o resultado esperado.
// const filterPeople1 = () => {
//   return people.reduce((acc, curr) => (curr.nationality === 'Australian' && 1901 <= curr.bornIn && 2000 >= curr.bornIn) ? curr : acc);
// };
// console.log(filterPeople1(people));

//* solução professor
const filterPeople = (arr) => arr.filter(({ nationality, bornIn }) => nationality === 'Australian'  && bornIn > 1900 && bornIn <= 2000,);
console.log(filterPeople(people));