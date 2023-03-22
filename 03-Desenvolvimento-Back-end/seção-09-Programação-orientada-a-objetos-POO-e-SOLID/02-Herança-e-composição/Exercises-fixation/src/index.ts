// File of tests

import ConsoleLogger from "./ConsoleLogger";
import ConsoleLogger2 from "./ConsoleLogger2";
import ExampleDatabase from "./ExampleDatabase";
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

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

database1.save('key_1', 'value_1');
database2.save('key_2', 'value_2');
database3.save('key_3', 'value_3');

