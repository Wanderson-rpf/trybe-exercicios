// File of tests

import MyClass from "./MyClass";
import Subclass from "./Subclass";
import Superclass from "./Superclass";

const sup = new Superclass();
const sub = new Subclass();

const myFunc = (object: Superclass) => {
  object.sayHello();
  console.log(object.isSuper ? 'Super' : 'Sub');
  
};

myFunc(sup);
myFunc(sub);

//* Alterando o metodo sayHello para protect e chamando o mesmo dentro de sayHello2.
// const myFunc = (object: Subclass) => {
//   object.sayHello2();
// };

// myFunc(sub);

const myObject = new MyClass(2);
console.log(myObject.myNumber);
console.log(myObject.myFunc(4));

