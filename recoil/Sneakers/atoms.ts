import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

import { Sneakers } from "@/graphql/types";

export type SneakersStateType = Array<Sneakers> | [];

export const sneakersState = atom<SneakersStateType>({
  key: `Sneakers/${uuidv4()}`,
  default: [],
});
