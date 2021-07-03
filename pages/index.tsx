import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import { Card, Search, SideModal } from "@/components";
import db from "@/libs/db";

import { ISneaker, sneakersState } from "../recoil/Sneakers/atoms";

const Home: React.FC = () => {
  const [sneakers, setSneakers] = useRecoilState(sneakersState);

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        db.collection("sneakers").onSnapshot((snapshot) => {
          setSneakers(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            })) as Array<ISneaker>
          );
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchSneakers();
  }, []);

  return (
    <main className="p-14 space-y-10">
      <SideModal />
      <section className="">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <h1 className="text-4xl font-bold">Все кроссовки</h1>
          <Search />
        </div>
        <div className="mt-10 grid grid-rows-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sneakers &&
            sneakers.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.data.name}
                price={item.data.price}
                photoUrl={item.data.photoUrl}
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
