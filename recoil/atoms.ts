import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export interface ISneaker {
  _id: string;
  name: string;
  price: number;
  photoUrl: string;
}

export interface ISneakers {
  items: Array<ISneaker>;
}

export const sneakersState = atom<ISneakers | null>({
  key: `Sneakers/${uuidv4()}`,
  default: null,
});

// -------------

export interface ICartItem extends ISneaker {
  count: number;
}

export type CartItemsStateType = Array<ICartItem> | null;

export const cartItemsState = atom<CartItemsStateType>({
  key: `Cart/${uuidv4()}`,
  default: null,
});

// -------------

export const cartOpenedState = atom<boolean>({
  key: `Cart/${uuidv4()}`,
  default: false,
});

export const cartTotalPriceState = atom<number>({
  key: `Cart/${uuidv4()}`,
  default: 0,
});
