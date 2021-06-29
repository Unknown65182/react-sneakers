import Image from "next/image";
import React from "react";

const SideModal = () => {
  return (
    <section className="z-10">
      <div className="absolute top-0 left-0 m-0 w-full h-full bg-black opacity-50"></div>
      <div className="fixed top-0 right-0 m-0 w-96 h-full bg-white p-8 flex flex-col">
        <h1 className="text-2xl font-bold mb-8">Корзина</h1>
        <div className="overflow-auto mb-5">
          <div className="p-5 border border-gray-lesslight rounded-3xl flex items-center justify-between space-x-4">
            <Image src="/assets/sneakers/1.svg" width={70} height={70} />
            <div className="w-36">
              <p className="text-sm">Мужские Кроссовки Nike Air Max 270</p>
              <b className="text-sm">12 999 руб.</b>
            </div>
            <button className="min-w-8 h-8 rounded-lg">
              <Image src="/assets/remove.svg" width={11} height={11} />
            </button>
          </div>
          <div className="mt-5 p-5 border border-gray-lesslight rounded-3xl flex items-center justify-between space-x-4">
            <Image src="/assets/sneakers/2.svg" width={70} height={70} />
            <div className="w-36">
              <p className="text-sm">Мужские Кроссовки Nike Air Max 270</p>
              <b className="text-sm">12 999 руб.</b>
            </div>
            <button className="min-w-8 h-8 rounded-lg">
              <Image src="/assets/remove.svg" width={11} height={11} />
            </button>
          </div>
          <div className="mt-5 p-5 border border-gray-lesslight rounded-3xl flex items-center justify-between space-x-4">
            <Image src="/assets/sneakers/2.svg" width={70} height={70} />
            <div className="w-36">
              <p className="text-sm">Мужские Кроссовки Nike Air Max 270</p>
              <b className="text-sm">12 999 руб.</b>
            </div>
            <button className="min-w-8 h-8 rounded-lg">
              <Image src="/assets/remove.svg" width={11} height={11} />
            </button>
          </div>
          <div className="mt-5 p-5 border border-gray-lesslight rounded-3xl flex items-center justify-between space-x-4">
            <Image src="/assets/sneakers/2.svg" width={70} height={70} />
            <div className="w-36">
              <p className="text-sm">Мужские Кроссовки Nike Air Max 270</p>
              <b className="text-sm">12 999 руб.</b>
            </div>
            <button className="min-w-8 h-8 rounded-lg">
              <Image src="/assets/remove.svg" width={11} height={11} />
            </button>
          </div>
          <div className="mt-5 p-5 border border-gray-lesslight rounded-3xl flex items-center justify-between space-x-4">
            <Image src="/assets/sneakers/2.svg" width={70} height={70} />
            <div className="w-36">
              <p className="text-sm">Мужские Кроссовки Nike Air Max 270</p>
              <b className="text-sm">12 999 руб.</b>
            </div>
            <button className="min-w-8 h-8 rounded-lg">
              <Image src="/assets/remove.svg" width={11} height={11} />
            </button>
          </div>
        </div>

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
  );
};

export default SideModal;
