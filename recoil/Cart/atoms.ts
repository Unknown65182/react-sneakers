import { atom, selector } from "recoil";
import { v4 as uuidv4 } from "uuid";

export interface ICartItem {
  _id: string;
  name: string;
  price: number;
  photoUrl: string;
  count: number;
}

export interface ICart {
  items: Array<ICartItem> | null;
  opened: boolean;
}

export type CartStateType = ICart;

export const cartState = atom<CartStateType>({
  key: `Cart/${uuidv4()}`,
  default: { items: null, opened: false },
});

export const cartTotalPriceSelector = selector({
  key: `Cart/${uuidv4()}`,
  get: ({ get }) => {
    const items = get(cartState).items;
    return items
      ? items.reduce((acc, { price, count }) => acc + price * count, 0)
      : 0;
  },
});

export const cartItemsCountSelector = selector({
  key: `Cart/${uuidv4()}`,
  get: ({ get }) => {
    const items = get(cartState).items;
    return items ? items.reduce((acc, { count }) => acc + count, 0) : 0;
  },
});
