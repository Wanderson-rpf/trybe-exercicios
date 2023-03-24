import { Person } from "./entities/Person";
import Student from "./entities/Students";
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
