import MyInterface from "./interfaces/MyInterface";

export default class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    return `Sum of values ${myParam} and ${this.myNumber} is ${myParam + this.myNumber}`;
  }
}