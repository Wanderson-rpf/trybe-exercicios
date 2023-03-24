export default class Subject {
  constructor(private _name: string) {
    this.name = _name;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    if (value.length < 3) {
      throw new Error('Name invalid!');
    }
    this._name = value;
  }
}