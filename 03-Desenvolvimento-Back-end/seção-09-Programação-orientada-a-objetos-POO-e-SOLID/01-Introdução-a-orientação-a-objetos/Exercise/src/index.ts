import Student from "./Students";

const student01 = new Student({
  matriculation: '0001',
  name: 'João',
  noteProofs: [5, 4, 7, 9],
  noteWorks: [5, 8]
});
console.log(student01);

const student02 = new Student({
  matriculation: '0002',
  name: 'Maria',
  noteProofs: [7, 8, 7, 9],
  noteWorks: [5, 6]
});
console.log(student02);
