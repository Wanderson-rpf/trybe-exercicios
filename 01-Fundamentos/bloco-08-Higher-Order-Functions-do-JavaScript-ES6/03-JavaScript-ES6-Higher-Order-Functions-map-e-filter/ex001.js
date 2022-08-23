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

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
console.log('\n<------------------- exercicio 01 ------------------->');
function formatedBookNames() {
  const listBooks = [];
  books.map((elemnt) => {
    listBooks.push(`${elemnt.name} - ${elemnt.genre} - ${elemnt.author.name}`);
  });
  return listBooks;
}
console.log(formatedBookNames())

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, 
// com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. 
// O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando 
// o livro foi lançado.
console.log('\n<------------------- exercicio 02 ------------------->');
function nameAndAge() {
  const listAuthors = [];
  books.map((element) => {
    listAuthors.push({
      age: 2022 - element.author.birthYear,
      author: element.author.name,
    });
  })
  listAuthors.sort((a, b) => a.age - b.age);
  return listAuthors;
}

console.log(nameAndAge());

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
console.log('\n<------------------- exercicio 03 ------------------->');
function fantasyOrScienceFiction() {
  return books.filter((item) => item.genre === 'Ficção Científica' || item.genre === 'Fantasia');
}
console.log(fantasyOrScienceFiction());

// 4 - Crie um array formado pelos livros com mais de 60 anos desde sua publicação. 
// Esse array deve ser ordenado do livro mais velho ao mais novo.
console.log('\n<------------------- exercicio 04 ------------------->');
function oldBooksOrdered() {
  return books.filter((item) => (2022 - item.releaseYear) >= 60).sort((a, b) => a.releaseYear - b.releaseYear);
}
console.log(oldBooksOrdered());

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
console.log('\n<------------------- exercicio 05 ------------------->');
function fantasyOrScienceFictionAuthors() {
  return books.filter((item) => item.genre === 'Fantasia' || item.genre === 'Ficção Científica')
  .map((item) => item.author.name).sort();
}
console.log(fantasyOrScienceFictionAuthors())

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
console.log('\n<------------------- exercicio 06 ------------------->');
function oldBooks() {
  return books.filter((item) => (2022 - item.releaseYear) >= 60).map((item) => item.name);
}
console.log(oldBooks());

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
console.log('\n<------------------- exercicio 07 ------------------->');
// * feito com ajuda do gabarito.
function authorWith3DotsOnName() {
  return books.find((item) => item.author.name.split(' ').filter((item) => item.endsWith('.')).length === 3).name;
}
console.log(authorWith3DotsOnName());

// outra forma de fazer
function authorWith3DotsOnName() {
  return books.filter((book) => (
    book.author.name[1] === '.'
    && book.author.name[4] === '.'
    && book.author.name[7] === '.'
  ))[0].name;
}
