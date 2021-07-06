// import Image from "next/image";
// import { useRouter } from "next/router";
import React from "react";
// import { useRecoilValue } from "recoil";

// // @ts-ignore
// import { Card } from "@/components";

// import { favoriteItemsState } from "../recoil/atoms";

const Favorites = () => {
  // const favoriteItems = useRecoilValue(favoriteItemsState);
  // const router = useRouter();
  return (
    <main className="h-full p-14 space-y-10">
      {/* {favoriteItems && favoriteItems.length > 0 ? (
        <>
          <h1 className="text-4xl font-bold">Избранное</h1>
          <div className="mt-10 grid grid-rows-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {favoriteItems &&
              favoriteItems.map((item, index) => (
                <Card
                  key={item._id}
                  _id={item._id}
                  title={item.title}
                  price={item.price}
                  photoUrl={item.photoUrl}
                />
              ))}
          </div>
        </>
      ) : (
        <div className="w-64 m-auto text-center h-full flex flex-col justify-center items-center">
          <Image src="/assets/sadEmoji.png" width={70} height={70} />
          <h3 className="text-2xl font-bold mt-6 mb-3">Закладок нет :(</h3>
          <p className="text-gray mb-16">Вы ничего не добавляли в закладки</p>
          <button
            className="bg-accent rounded-3xl flex items-center justify-between w-full py-3 px-8 pl-14 mt-6"
            onClick={() => router.push("/")}
          >
            <p className="text-white">Вернуться назад</p>
            <Image src="/assets/arrow.svg" width={14} height={12} />
          </button>
        </div>
      )} */}
    </main>
  );
};

export default Favorites;
