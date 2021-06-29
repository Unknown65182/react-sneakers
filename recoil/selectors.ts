// import { DefaultValue, selector } from "recoil";
// import { selector } from "recoil";
// import { v4 as uuidv4 } from "uuid";

// import { cartItemsState, cartTotalPriceState } from "./atoms";

// export const totalAmountCartItemsSelector = selector({
//   key: `Cart/${uuidv4()}`,
//   get: ({ get }) => get(cartTotalPriceState),
//   set: ({ set, get }) => {
//     const items = get(cartItemsState);
//     console.log(items);

//     set(
//       cartTotalPriceState,
//       items?.reduce((acc, { price }) => acc + price, 0)
//     );
//   },
// });

export default () => {};
