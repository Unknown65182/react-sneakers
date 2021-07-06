import Image from "next/image";
import React from "react";
import NumberFormat from "react-number-format";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { Sneakers } from "@/graphql/types";
import { favoriteItemsState } from "@/recoil/atoms";
import { cartState } from "@/recoil/Cart/atoms";

interface IProps extends Sneakers {}

const Card: React.FC<IProps> = ({ _id, title, price, photoUrl }) => {
  const cart = useRecoilValue(cartState);
  // const addCartItemState = useSetRecoilState(cartState);
  const removeCartItemState = useSetRecoilState(cartState);

  const favoriteItems = useRecoilValue(favoriteItemsState);
  // const addFavoriteItemState = useSetRecoilState(favoriteItemsState);
  const removeFavoriteItemState = useSetRecoilState(favoriteItemsState);

  // const addFavoriteItem = (item: IFavoriteItem) => {
  //   try {
  //     addFavoriteItemState((items) => {
  //       return items?.find((i) => i._id === item._id)
  //         ? items
  //         : items
  //         ? [...items, item]
  //         : [item];
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const removeFavoriteItem = (id: string) => {
    try {
      removeFavoriteItemState((items) =>
        items ? items?.filter((item) => item._id !== id) : null
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  // const addCartItem = (item: ICartItem) => {
  //   try {
  //     addCartItemState({
  //       ...cart,
  //       items: cart.items?.find((i) => i._id === item._id)
  //         ? cart.items
  //         : cart.items
  //         ? [...cart.items, item]
  //         : [item],
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const removeCartItem = (id: string) => {
    try {
      removeCartItemState({
        ...cart,
        items: cart.items
          ? cart.items?.filter((item) => item._id !== id)
          : null,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex flex-col justify-center justify-self-center space-y-5 w-56 p-8 rounded-5xl border border-solid border-gray-lesslight shadow-xl transition-all hover:shadow-2xl translate-card">
      <Image
        src={photoUrl && photoUrl !== "" ? photoUrl : "/assets/no-image.png"}
        width={133}
        height={112}
      />
      <p className="text-sm">{title}</p>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xs uppercase text-gray-light">Цена:</span>
          <b className="text-sm">
            <NumberFormat
              value={price}
              displayType="text"
              thousandSeparator=" "
              suffix=" руб."
            />
          </b>
        </div>
        {favoriteItems?.find((el) => el._id === _id) ? (
          <button
            className="w-8 h-8 rounded-lg absolute top-8 left-8 flex items-center justify-center bg-red-light border-none"
            onClick={() => removeFavoriteItem(_id)}
          >
            <Image src="/assets/favorite-full.svg" width={15} height={15} />
          </button>
        ) : (
          <button
            className="w-8 h-8 rounded-lg absolute top-8 left-8 flex items-center justify-center"
            // onClick={() =>
            //   addFavoriteItem({
            //     title,
            //     price,
            //     photoUrl,
            //     _id: _id,
            //     count: 1,
            //   })
            // }
          >
            <Image src="/assets/favorite.svg" width={15} height={15} />
          </button>
        )}
        {cart.items?.find((el) => el._id === _id) ? (
          <button
            className="w-8 h-8 rounded-lg flex items-center justify-center bg-accent-dark"
            onClick={() => removeCartItem(_id)}
          >
            <Image src="/assets/success.svg" width={11} height={11} />
          </button>
        ) : (
          <button
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            // onClick={() =>
            //   addCartItem({
            //     title,
            //     price,
            //     photoUrl,
            //     _id: _id,
            //     count: 2,
            //   })
            // }
          >
            <Image src="/assets/add.svg" width={11} height={11} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
