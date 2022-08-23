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

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
console.log('\n<---------------------- Exercicio 01 ---------------------->')
function authorBornIn1947() {
  const findPerson = books.find((person) => person.author.birthYear === 1947).author.name;
  return `O autor nascido em 1947 foi ${findPerson}.`;

}
console.log(authorBornIn1947());

// 2 - Retorne o nome do livro de menor nome.
console.log('\n<---------------------- Exercicio 02 ---------------------->')
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
const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

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
