import Image from "next/image";
import React, { useEffect } from "react";
import NumberFormat from "react-number-format";
import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  cartItemsCountSelector,
  cartState,
  cartTotalPriceSelector,
} from "../recoil/Cart/atoms";

const Cart = () => {
  const cart = useRecoilValue(cartState);
  const cartTotalPrice = useRecoilValue(cartTotalPriceSelector);
  const cartItemsCount = useRecoilValue(cartItemsCountSelector);
  const removeCartItemState = useSetRecoilState(cartState);
  const setCartOpenedState = useSetRecoilState(cartState);

  useEffect(() => {
    if (cart.opened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [cart.opened]);

  const closeCart = (event: React.MouseEvent) => {
    try {
      setCartOpenedState(() => ({ ...cart, opened: false }));
    } catch (error) {
      console.log(error.message);
    }
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

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
    <>
      {cart.opened ? (
        <section className="z-10 cart-open">
          <div
            className="absolute top-0 left-0 m-0 w-full h-screen bg-black opacity-50"
            onClick={(event) => closeCart(event)}
          ></div>
          <div className="fixed top-0 right-0 m-0 w-96 h-screen bg-white p-8 flex flex-col">
            <h1 className="text-2xl font-bold">Корзина</h1>

            {cart.items && cart.items?.length > 0 ? (
              <>
                <p className="mb-8 text-sm text-gray">
                  {cartItemsCount}
                  {cartItemsCount === 1
                    ? " предмет"
                    : cartItemsCount < 5
                    ? " предмета"
                    : " предметов"}
                </p>
                <ul className="overflow-auto space-y-4 mb-5 hide-scroll">
                  {cart.items.map((item) => (
                    <li
                      key={item._id}
                      className="p-5 border border-gray-lesslight rounded-3xl flex items-center justify-between space-x-4"
                    >
                      <Image src={item.photoUrl} width={70} height={70} />
                      <div className="w-36">
                        <p className="text-sm">{item.name}</p>
                        <div>
                          <b className="text-sm mr-3">
                            <NumberFormat
                              value={item.price}
                              displayType="text"
                              thousandSeparator=" "
                              suffix=" руб."
                            />
                          </b>
                          <i>x{item.count}</i>
                        </div>
                      </div>
                      <button
                        className="min-w-8 h-8 rounded-lg"
                        onClick={() => removeCartItem(item._id)}
                      >
                        <Image
                          src="/assets/remove.svg"
                          width={11}
                          height={11}
                        />
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto mb-5 flex space-x-2">
                  <p className="whitespace-nowrap">Итого:</p>
                  <span className="w-full border-b border-dashed border-gray-light"></span>
                  <b className="whitespace-nowrap">
                    <NumberFormat
                      value={cartTotalPrice.toFixed(2)}
                      displayType="text"
                      thousandSeparator=" "
                      suffix=" руб."
                    />
                  </b>
                </div>
                <div className="flex space-x-2">
                  <p className="whitespace-nowrap">Налог 5%:</p>
                  <span className="w-full border-b border-dashed border-gray-light"></span>
                  <b className="whitespace-nowrap">
                    <NumberFormat
                      value={(cartTotalPrice * 1.05).toFixed(2)}
                      displayType="text"
                      thousandSeparator=" "
                      suffix=" руб."
                    />
                  </b>
                </div>
                <button className="bg-accent rounded-3xl flex items-center justify-between py-3 px-8 pl-24 mt-6">
                  <p className="text-white">Оформить заказ</p>
                  <Image src="/assets/arrow.svg" width={14} height={12} />
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-full">
                <Image src="/assets/box.svg" width={112} height={112} />
                <h3 className="text-2xl font-bold mb-2 mt-5">Корзина пустая</h3>
                <p className="text-gray mb-10">
                  Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
                </p>
                <button
                  className="bg-accent rounded-3xl flex items-center justify-between w-full py-3 px-8 pl-24 mt-6"
                  onClick={closeCart}
                >
                  <p className="text-white">Вернуться назад</p>
                  <Image src="/assets/arrow.svg" width={14} height={12} />
                </button>
              </div>
            )}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Cart;
