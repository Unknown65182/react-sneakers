import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";

import logo from "/public/assets/logo.png";

import { cartState, CartStateType } from "../recoil/atoms";

const Header: React.FC = () => {
  const [cart, setCart] = useRecoilState<CartStateType>(cartState);
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
          onClick={() => setCart({ ...cart, isOpened: !cart.isOpened })}
        >
          <Image src="/assets/cart.svg" width={18} height={18} />
          <span className="ml-2 text-gray-dark">1205 руб.</span>
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
