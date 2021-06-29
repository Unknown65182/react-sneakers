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

export interface ICartItem extends ISneaker {
  count: number;
}

export interface ICart {
  items: Array<ICartItem>;
  isOpened?: boolean;
}

export const sneakersState = atom<ISneakers | null>({
  key: `Sneakers/${uuidv4()}`,
  default: null,
});

export type CartStateType = ICart | { items: null; isOpened: boolean };

export const cartState = atom<CartStateType>({
  key: `Cart/${uuidv4()}`,
  default: { items: null, isOpened: false },
});
