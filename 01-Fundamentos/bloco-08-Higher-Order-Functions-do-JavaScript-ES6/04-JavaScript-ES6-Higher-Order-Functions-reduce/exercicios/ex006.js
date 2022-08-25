// 6- Para o próximo exercício você deve criar um novo array de objetos a partir das informações 
// das constantes students e grades, onde cada objeto desse novo array terá o formato 
// { name: nome do aluno, average: media das notas }. 
// Para isso vamos assumir que a posição do index 0 de grades refere-se ao estudante na posição de index 0 de students. 
// Para resolver este exercício, além de reduce, será necessário utilizar também a função map. 
// Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(arrStudent, arrNote) {
  const objStudent = arrStudent.map((element, index) => (
    {
      nome: element,
      nota: arrNote[index].reduce((acc, curr) => acc + curr) / arrNote[index].length,
    }));
    return objStudent;
}

console.log(studentAverage(students, grades));