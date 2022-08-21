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
  turno: 'tarde',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
// <------------------ trecho exercicio 5 parte 3 ------------------>
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);
// <------------------ trecho exercicio 5 parte 3 ------------------>
const studentspresence = (obj) => {
  let count = 0;
  const list = Object.entries(obj)

  for (let index = 0; index < list.length; index += 1) {
    if (list[index][1].materia === 'Matemática') {
      count += list[index][1].numeroEstudantes;
    }
  }
  return `O total de alunos da aula de Matemática foi: ${count}`;
};
console.log(studentspresence(allLessons));

// 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele 
// ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
const report = (obj, teacher) => {
  const objReport = {};
  const listSubjects = [];
  const list = Object.entries(obj)
  let countStudents = 0;

  for (let index = 0; index < list.length; index += 1) {
    if (list[index][1].professor === teacher) {
      countStudents += list[index][1].numeroEstudantes;
      listSubjects.push(list[index][1].materia);
    }
  }
  objReport.professor = teacher;
  objReport.aulas = listSubjects;
  objReport.alunos = countStudents;

  return objReport
};

console.log(report(allLessons, 'Maria Clara'));