// 1 - Adicione uma callback como parâmetro da função getUser para realizar as operações abaixo:
// A função getUser, ao ser chamada com o parâmetro userFullName, deve retornar: "Olá! Meu nome é Ivan Ivanovich"
// A função getUser, ao ser chamada com o parâmetro userNationality, deve retornar: "Ivan é Russo"

/**
 * GetUser is a function that takes a callback as a parameter and returns the callback with the user
 * object as an argument
 */

// callbacks-para-fixar-01.js

const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const getUser = (callback) => { // adicionando o parametro para callback
  const user = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russo',
  };
  return callback(user);  // colocandoo return para retornar a callback.
};

console.log(getUser(userFullName)); // Retorno esperado: "Olá! Meu nome é Ivan Ivanovich"
console.log(getUser(userNationality)); // Retorno esperado: "Ivan é Russo"