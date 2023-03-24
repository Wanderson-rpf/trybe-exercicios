import { Person } from "./entities/Person";
import Student from "./entities/Students";
import Subject from "./entities/Subject";
import Teacher from "./entities/Teacher";
import IEmployee from "./interface/employee";

// Test person
// Case success
try {
  const person01 = new Person("Carlos", new Date("1990-05-28"));
  console.log(person01);
} catch (error) {
  console.log(error);
}

// Case error
// try {
//   const person02 = new Person('Carlos', new Date('2024-05-28'));
//   console.log(person02);

// } catch (error) {
//   console.log(error);
// }

const carolina = new Student("Carolina da Silva", new Date("2005/03/17"));
carolina.noteProofs = [25, 20, 25, 23];
carolina.noteWorks = [50, 47];
console.log("Notes totals:", carolina.sumGrades());
console.log("Media notes:", carolina.sumAverageGrade());

console.log(carolina);

const testInterfaceEmployee: IEmployee = {
  registration: "FNC1234567891011",
  salary: 1200.0,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g,"");

    return `FNC${randomStr}`;
  },
};

console.log(testInterfaceEmployee);

const math = new Subject('math');
const story = new Subject('story');
const philosophy = new Subject('philosophy');

console.log(math);
console.log(story);
console.log(philosophy);

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, story);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);