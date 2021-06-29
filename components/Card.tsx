import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";

import { cartState, CartStateType, ICartItem } from "../recoil/atoms";

interface IProps {
  id: string;
  name: string;
  price: number;
  photoUrl: string;
}

const Card: React.FC<IProps> = ({ id, name, price, photoUrl }) => {
  const [cart, setCart] = useRecoilState<CartStateType>(cartState);
  const addItemCart = (item: ICartItem) => {
    try {
      if (!cart.items?.find((el) => el._id === item._id)) {
        const newCart = {
          items: cart?.items ? [...cart.items, item] : [item],
        };
        setCart(newCart);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex flex-col justify-center space-y-3 w-56 p-8 rounded-5xl border border-solid border-gray-lesslight shadow-xl transition-all hover:shadow-2xl translate-card">
      <Image src={photoUrl} width={133} height={112} />
      <p className="text-sm">{name}</p>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xs uppercase text-gray-light">Цена:</span>
          <b className="text-sm">{price} руб.</b>
        </div>
        <button className="w-8 h-8 rounded-lg absolute top-8 left-8 flex items-center justify-center">
          <Image src="/assets/favorite.svg" width={15} height={15} />
        </button>
        {cart.items?.find((el) => el._id === id) ? (
          <button
            className="w-8 h-8 rounded-lg flex items-center justify-center bg-accent-dark"
            onClick={() =>
              addItemCart({
                name,
                price,
                photoUrl,
                _id: id,
                count: 1,
              })
            }
          >
            <Image src="/assets/success.svg" width={11} height={11} />
          </button>
        ) : (
          <button
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            onClick={() =>
              addItemCart({
                name,
                price,
                photoUrl,
                _id: id,
                count: 1,
              })
            }
          >
            <Image src="/assets/add.svg" width={11} height={11} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
