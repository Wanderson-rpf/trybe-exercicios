import Items from "../Items";

export default interface IOrder {
  client: string;
  items: Items[];
  payment: string;
  discount: number;
};