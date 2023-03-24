import IEmployee from "../interface/employee";
import { Person } from "./Person";
import Subject from "./Subject";

export default class Teacher extends Person implements IEmployee {
  private _subject: Subject;
  private _registration = String();
  private _admissionDate: Date;

  constructor(
    name: string, 
    birthDate: Date, 
    private _salary: number,
    subject: Subject
  ) {
    super(name, birthDate)

    this._subject = subject;
    this.salary = _salary;
    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
  }

  public get subject(): Subject {
    return this._subject;
  }
  public set subject(value: Subject) {
    this._subject = value;
  }

  public get registration(): string {
    return this._registration;
  }
  public set registration(value: string) {
    if (value.length < 16) throw new Error("Invalid matriculation.");
    this._registration = value;
  }

  public get salary(): number {
    return this._salary;
  }
  public set salary(value: number) {
    if (value < 0) throw new Error('Invalid salary.');
    this._salary = value;
  }

  public get admissionDate(): Date {
    return this._admissionDate;
  }
  public set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('Invalid date.');
    this._admissionDate = value;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `PRF${randomStr}`;
  }
}