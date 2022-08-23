const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

console.log('\n<---------------------- Exercicio 01 ---------------------->')
// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
function authorBornIn1947() {
  const findPerson = books.find((person) => person.author.birthYear === 1947).author.name;
  return `O autor nascido em 1947 foi ${findPerson}.`;

}
console.log(authorBornIn1947());

console.log('\n<---------------------- Exercicio 02 ---------------------->')
// 2 - Retorne o nome do livro de menor nome.
function smallerName() {
  let nameBook = books[0].name;

  books.forEach((item) => { 
   if (item.name.length < nameBook.length) { nameBook = item.name; }
  });
  return `O livro de menor nome é ${nameBook}.`;
}
console.log(smallerName());

console.log('\n<---------------------- Exercicio 03 ---------------------->')
// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
function getNamedBook() {
  let result;
  books.forEach((item, index) => {
    if (item.name.length === 26) {result = item}
  } );
  return result;
}
console.log(getNamedBook());

console.log('\n<---------------------- Exercicio 04 ---------------------->')
// 4 - Ordene os livros por data de lançamento em ordem decrescente.
function booksOrderedByReleaseYearDesc() {
  books.sort((a, b) => b.releaseYear - a.releaseYear);
  return books;
}
console.log(booksOrderedByReleaseYearDesc());

console.log('\n<---------------------- Exercicio 05 ---------------------->')
// 🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
function everyoneWasBornOnSecXX() {
  return books.every((birthYearAuthor) => { 1901 <= birthYearAuthor.birthYear <= 2000 });
}
console.log(everyoneWasBornOnSecXX());

console.log('\n<---------------------- Exercicio 06 ---------------------->')
// 🚀 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
function someBookWasReleaseOnThe80s() {
  books.some((releaseOnThe80s) => { console.log(releaseOnThe80s.releaseYear, 1980 < releaseOnThe80s.releaseYear && releaseOnThe80s.releaseYear < 1989) });
  return books.some((releaseOnThe80s) => { 1980 < releaseOnThe80s.releaseYear && releaseOnThe80s.releaseYear < 1989 }); 
}
console.log(someBookWasReleaseOnThe80s());

console.log('\n<---------------------- Exercicio 07 ---------------------->')
// 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
function authorUnique() {
  let authorBirthYear = books[0].author.birthYear;
  // console.log(authorBirthYear);
  return books.forEach((item) => {
    console.log(item);
    if (item.author.birthYear === authorBirthYear) { return false; }
    return true;
  })

}
console.log(authorUnique());
