import { Person } from "./Person";

// Test person
// Case success
try {
  const person01 = new Person('Carlos', new Date('1990-05-28'));
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
