// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. 
// Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. 
// A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente 
// um email no formato nome_da_pessoa@trybe.com.
const employeeRegistration = fullName => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {nome_completo: fullName, email:`${email}@trybe.com`};
};
// console.log(employeeRegistration('Wanderson Ricardo'));

const newEmployees = (func) => {
  const employees = {
    id1: func('Wanderson Ricardo'),
    id2: func('Carla Paiva'),
    id3: func('Luiza Drumond'),
  }
  return employees;
};

console.log(newEmployees(employeeRegistration));