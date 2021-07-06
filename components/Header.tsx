import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { default as NumberFormat } from "react-number-format";
import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  cartItemsCountSelector,
  cartState,
  cartTotalPriceSelector,
} from "@/recoil/Cart/atoms";

const Header: React.FC = () => {
  const cart = useRecoilValue(cartState);
  const cartTotalPrice = useRecoilValue(cartTotalPriceSelector);
  const cartItemsCount = useRecoilValue(cartItemsCountSelector);
  const setCartOpenedState = useSetRecoilState(cartState);

  const router = useRouter();

  return (
    <header className="flex items-center justify-between p-11 min-h-10 border-b border-solid border-gray-lesslight">
      <Link href="/">
        <a className="flex items-center">
          <Image src="/assets/logo.png" width={40} height={40} layout="fixed" />
          <div className="mr-auto ml-4">
            <h3 className="text-xl font-bold uppercase">React Sneakers</h3>
            <p className="text-sm font-normal text-gray">
              Магазин лучших кроссовок
            </p>
          </div>
        </a>
      </Link>
      <ul className="flex space-x-3 h-8">
        <li
          className={clsx(
            "flex items-center justify-center min-w-8 px-2 rounded-md transition-colors hover:bg-accent-light",
            cart.opened && "bg-accent-light"
          )}
        >
          <Link href="#" as={router.pathname}>
            <a
              className="flex items-center justify-center"
              onClick={() =>
                setCartOpenedState({
                  ...cart,
                  opened: !cart.opened,
                })
              }
            >
              {cartTotalPrice !== 0 && (
                <span className="mr-2 text-gray-dark">
                  <NumberFormat
                    value={cartTotalPrice.toFixed(2)}
                    displayType="text"
                    thousandSeparator=" "
                    suffix=" руб."
                  />
                </span>
              )}
              <div className="relative flex items-center ">
                <Image src="/assets/cart.svg" width={18} height={18} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent-dark text-white text-xs text-center rounded-lg w-4 h-4">
                    {cartItemsCount}
                  </span>
                )}
              </div>
            </a>
          </Link>
        </li>
        <li
          className={clsx(
            "flex items-center justify-center min-w-8 px-2 rounded-md transition-colors hover:bg-accent-light",
            router.pathname === "/favorites" && "bg-accent-light"
          )}
        >
          <Link href="/favorites">
            <a className="flex items-center justify-center w-full h-full">
              <Image src="/assets/favorite.svg" width={18} height={18} />
            </a>
          </Link>
        </li>
        <li className="flex items-center justify-center min-w-8 px-2 rounded-md transition-colors hover:bg-accent-light">
          <Link href="/profile">
            <a className="flex items-center justify-center w-full h-full">
              <Image src="/assets/profile.svg" width={18} height={18} />{" "}
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
