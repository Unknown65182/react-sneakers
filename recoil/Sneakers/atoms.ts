import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

interface ISneaker {
  _id: string;
  name: string;
  price: number;
  photoUrl: string;
}

export type SneakersStateType = Array<ISneaker> | null;

export const sneakersState = atom<SneakersStateType>({
  key: `Sneakers/${uuidv4()}`,
  default: null,
});
