import IOrder from "./interfaces/order";
import Items from "./Items";

export default class Order {
  private _nameClient: string;
  private _itemsOrder: Items[] = Array();
  private _payment: string;
  private _discount: number = 0;

  constructor({ client, items, payment, discount }: IOrder) {
    this._nameClient = client;
    this._itemsOrder = items;
    this._payment = payment;
    this._discount = discount;
  }

  public get nameClient(): string {
    return this._nameClient;
  }
  public set nameClient(value: string) {
    if (value.length < 3) {
      throw new Error("Name must contain a least 3 characters.");
    }
    this._nameClient = value;
  }

  public get itemsOrder(): Items[] {
    return this._itemsOrder;
  }
  public set itemsOrder(value: Items[]) {
    if (value.length === 0) {
      throw new Error("The order must have at least one item.");
    }
    this._itemsOrder = value;
  }

  public get payment(): string {
    return this._payment;
  }
  public set payment(value: string) {
    this._payment = value;
  }

  public get discount(): number {
    return this._discount;
  }
  public set discount(value: number) {
    if (value < 0) {
      throw new Error("Discount cannot be a negative amount.");
    }
    this._discount = value;
  }

  calculateTotal(): number {
    const total = this.itemsOrder.reduce((prevItem, item) => {
      const valueTotal = prevItem + item.price;
      return valueTotal;
    }, 0);
    return total;
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.discount);
  }
}
