// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, 
// caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  const number = numbers.find((num) => num % 3 === 0 && num % 5 === 0);
  return number;
}
console.log(findDivisibleBy3And5())

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const name = names.find((n) => n.length === 5);
  return name;
}
console.log(findNameWithFiveLetters());

// 3 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  const music = musicas.find((idMusic) => idMusic.id === id).title;
  return music;
}

console.log(findMusic('31031685'));
