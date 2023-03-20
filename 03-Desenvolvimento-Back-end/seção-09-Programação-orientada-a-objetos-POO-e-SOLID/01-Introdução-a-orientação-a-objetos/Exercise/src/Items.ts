export default class Items {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
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

  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    if (value < 0) throw new Error('Price must be positive.');
    this._price = value;
  }
}