const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: 
// o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
console.log('------------------------------------------\nExercicio 01')
const addTurn = (obj, key, value) => {
  obj[key] = value
};

addTurn(lesson2, 'turno', 'noite');
console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
console.log('------------------------------------------\nExercicio 02')
const viewKeys = (obj) => {
  const listKeys = Object.keys(obj);
  console.log(listKeys);
};
viewKeys(lesson1);

// Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
console.log('------------------------------------------\nExercicio 03')
const objLength = (obj) => {
  const listKeys = Object.keys(obj);
  console.log(`O objeto possui o tamanho de ${listKeys.length} elementos.`)
};
objLength(lesson3);
  
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
console.log('------------------------------------------\nExercicio 04')
const viewValues = (obj) => {
  const listValues = Object.values(obj);
  console.log(listValues);
};
viewValues(lesson1);

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. 
console.log('------------------------------------------\nExercicio 05')
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
console.log('------------------------------------------\nExercicio 06')
const allStudents = (obj) => {
  let students = obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes;
  console.log(` Todas as turmas tem o total de ${students} alunos.`); 
};
allStudents(allLessons);

// Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto.
console.log('------------------------------------------\nExercicio 07')
const getInfo = (obj, index) => {
  console.log(Object.values(obj)[index]);
};
getInfo(lesson1, 0);

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: 
// o objeto, o nome da chave e o valor da chave.
console.log('------------------------------------------\nExercicio 08')
const verifyInfo = (obj, key, value) => {
  for (const k in obj) {
    // console.log(k, obj[k]);
    if (k === key && obj[k] === value) {
      return true;
    }
  }
  return false;
};
console.log(verifyInfo(lesson3, 'turno', 'noite'));
console.log(verifyInfo(lesson3, 'materia', 'Maria Clara'));