export default class Superclass {
  constructor(public isSuper: boolean = true) {}

  public sayHello(): void {
    console.log('Hello world!');
  }

  // protected sayHello(): void {
  //   console.log('Hello world!');
  // }
}