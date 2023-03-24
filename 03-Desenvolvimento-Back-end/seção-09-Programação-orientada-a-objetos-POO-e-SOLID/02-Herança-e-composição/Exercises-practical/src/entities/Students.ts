import { Person } from "./Person";

export default class Student extends Person {
  private _matriculation: string = '';
  private _noteProofs: number[] = Array();
  private _noteWorks: number[] = Array();

  constructor(name: string, birthDate: Date){
    super(name, birthDate);
    this.matriculation = this.generateEnrollment();
  }

  public get matriculation(): string {
    return this._matriculation;
  };
  public set matriculation(value: string) {
    if (value.length < 16) throw new Error("Invalid matriculation.");
    this._matriculation = value;
  };

  public get noteProofs(): number[] {
    return this._noteProofs;
  };
  public set noteProofs(value: number[]) {
    if (value.length > 4) {
      throw new Error('Student must contain four test scores.')
    }
    this._noteProofs = value;
  };

  public get noteWorks(): number[] {
    return this._noteWorks;
  };
  public set noteWorks(value: number[]) {
    if (value.length > 2) {
      throw new Error('Student must contain two notes for works.')
    }
    this._noteWorks = value;
  };

  public sumGrades(): number {
    const allNotes = [...this.noteProofs, ...this.noteWorks];
    const total = allNotes.reduce((acc, note) => acc + note, 0);
    return total;
  };

  public sumAverageGrade(): number {
    const totalNotes = this.sumGrades();
    const divider = this.noteProofs.length + this.noteWorks.length;
    return Math.round(totalNotes / divider);
  };

  private generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`;
  }
};
