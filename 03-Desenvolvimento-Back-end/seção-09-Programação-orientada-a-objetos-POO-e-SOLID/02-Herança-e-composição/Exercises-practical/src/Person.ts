import dayjs from 'dayjs';

export class Person {
  // private _name: string;
  // private _birthDate: Date;

  // constructor(name: string, birthDate: Date) {
    constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }
  public set birthDate(value: Date) {
    this.validateAge(value);
    this._birthDate = value;
  }

  private validateName(name: string): void {
    if (name.length < 3) {
      throw new Error("Name invalid.");
    }
  }

  private validateAge(date: Date): void {    
    const birth = dayjs(date);
    const today = dayjs()
    const age = today.year() - birth.year();

    if (birth.isAfter(today)) {
      throw new Error("Birthday date cannot be greater than the current date.");
    }
    if (age > 120) {
      throw new Error("Age cannot be greater than 120 years.")
    }
  }
};
