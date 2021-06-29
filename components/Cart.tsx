import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";

import { cartState, CartStateType } from "../recoil/atoms";

const Cart = () => {
  const [cart, setCart] = useRecoilState<CartStateType>(cartState);

  const closeCart = (event: React.MouseEvent) => {
    setCart({ ...cart, isOpened: !cart.isOpened });
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  const removeItemCart = (id: string) => {
    try {
      if (cart?.items) {
        const newCart = {
          items: cart?.items && cart.items?.filter(({ _id }) => _id !== id),
          isOpened: true,
        };
        setCart(newCart);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {cart.isOpened ? (
        <section className="z-10">
          <div
            className="absolute top-0 left-0 m-0 w-full h-full bg-black opacity-50"
            onClick={(event) => closeCart(event)}
          ></div>
          <div className="fixed top-0 right-0 m-0 w-96 h-full bg-white p-8 flex flex-col">
            <h1 className="text-2xl font-bold mb-8">Корзина</h1>
            <ul className="overflow-auto space-y-4">
              {cart?.items &&
                cart.items.map((item) => (
                  <li
                    key={item._id}
                    className="p-5 border border-gray-lesslight rounded-3xl flex items-center justify-between space-x-4"
                  >
                    <Image src={item.photoUrl} width={70} height={70} />
                    <div className="w-36">
                      <p className="text-sm">{item.name}</p>
                      <b className="text-sm">{item.price} руб.</b>
                    </div>
                    <button
                      className="min-w-8 h-8 rounded-lg"
                      onClick={() => removeItemCart(item._id)}
                    >
                      <Image src="/assets/remove.svg" width={11} height={11} />
                    </button>
                  </li>
                ))}
            </ul>

            <div className="mt-auto mb-5 flex space-x-2">
              <p className="whitespace-nowrap">Итого:</p>
              <span className="w-full border-b border-dashed border-gray-light"></span>
              <b className="whitespace-nowrap">21 498 руб.</b>
            </div>
            <div className="flex space-x-2">
              <p className="whitespace-nowrap">Налог 5%:</p>
              <span className="w-full border-b border-dashed border-gray-light"></span>
              <b className="whitespace-nowrap">1074 руб.</b>
            </div>
            <button className="bg-accent rounded-3xl flex items-center justify-between py-3 px-8 pl-24 mt-6">
              <p className="text-white">Оформить заказ</p>
              <Image src="/assets/arrow.svg" width={14} height={12} />
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Cart;
