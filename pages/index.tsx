import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import Card from "../components/Card";
import Search from "../components/Search";
import { filteredItemsState, ISneaker, sneakersState } from "../recoil/atoms";

const Home: React.FC = () => {
  const [sneakers, setSneakers] = useRecoilState(sneakersState);
  const filteredSneakers = useRecoilValue(filteredItemsState);
  const [items, setItems] = useState<Array<ISneaker> | null>(null);

  useEffect(() => {
    if (filteredSneakers && filteredSneakers.length > 0) {
      setItems(filteredSneakers);
      return;
    }
    if (sneakers && sneakers.length > 0) {
      setItems(sneakers);
      return;
    }
  }, [sneakers, filteredSneakers]);

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const response = await fetch("/data/sneakers.json");
        const sneakers = await response.json();
        setSneakers(sneakers.items);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchSneakers();
  }, []);

  return (
    <main className="p-14 space-y-10">
      <section className="">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <h1 className="text-4xl font-bold">Все кроссовки</h1>
          <Search />
        </div>
        <div className="mt-10 grid grid-rows-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items &&
            items.map((item, index) => (
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
  );
};

export default Home;
