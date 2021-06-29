import Image from "next/image";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import Card from "../components/Card";
import Cart from "../components/Cart";
// import Card from "../components/Card";
// import Cart from "../components/Cart";
import Header from "../components/Header";
import { sneakersState } from "../recoil/atoms";
// import SideModal from "../components/SideModal";

const Home: React.FC = () => {
  const [sneakers, setSneakers] = useRecoilState(sneakersState);

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const response = await fetch("/data/sneakers.json");
        const sneakers = await response.json();
        setSneakers(sneakers);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchSneakers();
  }, []);

  return (
    <>
      <Header />
      <main className="p-14 space-y-10">
        <section className="">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">Все кроссовки</h1>
            <div className="flex items-center border border-solid border-gray-lesslight rounded-xl px-4">
              <Image src="/assets/search.svg" width={15} height={15} />
              <input
                className="ml-3 h-11 outline-none border-none text-sm"
                type="text"
                placeholder="Поиск..."
              />
            </div>
          </div>
          <div className="mt-10 grid grid-flow-row grid-cols-4 grid-rows-4 gap-8">
            {sneakers &&
              sneakers.items.map((item, index) => (
                <Card
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  photoUrl={item.photoUrl}
                />
              ))}
          </div>
        </section>
      </main>

      <Cart />
    </>
  );
};

export default Home;
