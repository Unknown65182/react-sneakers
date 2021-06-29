import Image from "next/image";
import React from "react";
import { default as NumberFormat } from "react-number-format";
import { useRecoilValue, useSetRecoilState } from "recoil";

import logo from "/public/assets/logo.png";

import { cartOpenedState, cartTotalPriceState } from "../recoil/atoms";

const Header: React.FC = () => {
  const setCartOpenedState = useSetRecoilState(cartOpenedState);
  const cartTotalPrice = useRecoilValue(cartTotalPriceState);

  return (
    <header className="flex items-center justify-between p-11 min-h-10 border-b border-solid border-gray-lesslight">
      <Image src={logo} width={40} height={40} />
      <div className="mr-auto ml-4">
        <h3 className="text-xl font-bold uppercase">React Sneakers</h3>
        <p className="text-sm font-normal text-gray">
          Магазин лучших кроссовок
        </p>
      </div>
      <ul className="flex space-x-7">
        <li
          className="flex items-center"
          onClick={() => setCartOpenedState((opened) => !opened)}
        >
          <Image src="/assets/cart.svg" width={18} height={18} />
          {cartTotalPrice !== 0 && (
            <span className="ml-2 text-gray-dark">
              <NumberFormat
                value={cartTotalPrice.toFixed(2)}
                displayType="text"
                thousandSeparator=" "
                suffix=" руб."
              />
            </span>
          )}
        </li>
        <li className="flex items-center">
          <Image src="/assets/favorite.svg" width={18} height={18} />
        </li>
        <li className="flex items-center">
          <Image src="/assets/profile.svg" width={18} height={18} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
