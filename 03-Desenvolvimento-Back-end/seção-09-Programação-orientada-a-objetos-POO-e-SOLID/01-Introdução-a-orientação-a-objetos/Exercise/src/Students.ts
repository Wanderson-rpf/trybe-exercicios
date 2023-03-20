import studentData from "./interfaces/studentData";


export default class Student {
  private _matriculation: string;
  private _name: string;
  private _noteProofs: number[];
  private _noteWorks: number[];

  constructor({ matriculation, name, noteProofs, noteWorks}: studentData) {
    this._matriculation = matriculation;
    this._name = name;
    this._noteProofs = noteProofs;
    this._noteWorks = noteWorks;
  }

  public get matriculation(): string {
    return this._matriculation;
  };
  public set matriculation(value: string) {
    this._matriculation = value;
  };

  public get name(): string {
    return this._name;
  };
  public set name(value: string) {
    this._name = value;
  };

  public get noteProofs(): number[] {
    return this._noteProofs;
  };
  public set noteProofs(value: number[]) {
    this._noteProofs = value;
  };

  public get noteWorks(): number[] {
    return this._noteWorks;
  };
  public set noteWorks(value: number[]) {
    this._noteWorks = value;
  };
};
