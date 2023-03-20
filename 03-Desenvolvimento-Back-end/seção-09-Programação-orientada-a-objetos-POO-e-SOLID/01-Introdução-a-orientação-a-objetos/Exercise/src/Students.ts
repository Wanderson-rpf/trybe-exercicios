import IStudent from "./interfaces/student";


export default class Student {
  private _matriculation: string;
  private _name: string;
  private _noteProofs: number[] = Array();
  private _noteWorks: number[] = Array();

  constructor({ matriculation, name, noteProofs, noteWorks}: IStudent) {
    this._matriculation = matriculation;
    this._name = name;
    this.noteProofs = noteProofs; // Alterado para o valor usado partir do metodo
    this.noteWorks = noteWorks;
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
    if (value.length !== 4) {
      throw new Error('Student must contain four test scores.')
    }
    this._noteProofs = value;
  };

  public get noteWorks(): number[] {
    return this._noteWorks;
  };
  public set noteWorks(value: number[]) {
    if (value.length !== 2) {
      throw new Error('Student must contain two notes for works.')
    }
    this._noteWorks = value;
  };

  totalNotes(): number {
    const allNotes = [...this.noteProofs, ...this.noteWorks];
    const total = allNotes.reduce((acc, note) => acc += note, 0);
    return total;
  };

  averageNotes(): number {
    const totalNotes = this.totalNotes();
    const divider = this.noteProofs.length + this.noteWorks.length;
    return Math.round(totalNotes / divider);
  };
};
