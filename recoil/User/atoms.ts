import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

interface IUser {
  data: {
    uid: string;
    name: string;
    email: string;
    photoUrl: string;
    favorites: Array<string>;
  } | null;
  login: () => {};
  logout: () => {};
  authReady: boolean;
}

const DefaultUserType = {
  data: null,
  authReady: false,
  login: () => {},
  logout: () => {},
};

export type UserStateType = IUser | typeof DefaultUserType;

export const userState = atom<UserStateType>({
  key: `User/${uuidv4()}`,
  default: DefaultUserType,
});
