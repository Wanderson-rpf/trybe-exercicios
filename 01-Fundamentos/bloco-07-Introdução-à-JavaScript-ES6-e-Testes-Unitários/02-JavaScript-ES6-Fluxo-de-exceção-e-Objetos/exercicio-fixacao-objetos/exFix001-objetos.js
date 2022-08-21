// Para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. 
// O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const completobject = (obj, key, value) => {
  obj[key] = value;
  return obj;
};

const objTeste = {
  name: 'Wanderson',
  lastName: 'Ricardo',
}

console.log(objTeste)
console.log(completobject(objTeste, 'idade', 32));
