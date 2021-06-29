import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export interface ISneaker {
  _id: string;
  name: string;
  price: number;
  photoUrl: string;
}

export const sneakersState = atom<Array<ISneaker> | null>({
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

// -------------

export interface IFavoriteItem extends ISneaker {
  count: number;
}

export type FavoriteItemsStateType = Array<IFavoriteItem> | null;

export const favoriteItemsState = atom<FavoriteItemsStateType>({
  key: `Favorite/${uuidv4()}`,
  default: null,
});

// -------------

export type FilteredItemsStateType = Array<ISneaker> | null;

export const filteredItemsState = atom<FilteredItemsStateType>({
  key: `Filtered/${uuidv4()}`,
  default: null,
});
