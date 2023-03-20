export default class Client {
  private _name: string;

  constructor (clientName: string) {
    this._name = clientName;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    if (value.length < 3) {
      throw new Error('Name must contain a least 3 characters.');
    }
    this._name = value;
  }
}