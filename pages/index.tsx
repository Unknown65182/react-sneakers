import { gql } from "@apollo/client";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import { Card, Search } from "@/components";
import { useAllSneakersQuery } from "@/graphql/types";

import { sneakersState } from "../recoil/Sneakers/atoms";

gql`
  query AllSneakers {
    allSneakers {
      _id
      title
      price
      photoUrl
    }
  }
`;

const Home: React.FC = () => {
  const [sneakers, setSneakers] = useRecoilState(sneakersState);
  const { loading, data } = useAllSneakersQuery();

  useEffect(() => {
    if (data) {
      const fetchSneakers = async () => {
        try {
          setSneakers(data?.allSneakers);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchSneakers();
    }
  }, [loading]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="p-14 space-y-10">
      <section className="">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <h1 className="text-4xl font-bold">Все кроссовки</h1>
          <Search />
        </div>
        <div className="mt-10 grid grid-rows-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sneakers &&
            sneakers.map((item) => (
              <Card
                key={item._id}
                _id={item._id}
                title={item.title}
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
