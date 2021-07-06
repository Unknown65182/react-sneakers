import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

interface IUser {
  uid: string;
  name: string;
  email: string;
  photoUrl: string;
  favorites: Array<string>;
}

export type UserStateType = IUser | null;

export const userState = atom<UserStateType>({
  key: `User/${uuidv4()}`,
  default: null,
});
