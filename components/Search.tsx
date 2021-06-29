import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { filteredItemsState, sneakersState } from "../recoil/atoms";

const Search = () => {
  const sneakers = useRecoilValue(sneakersState);
  const setFilteredSneakers = useSetRecoilState(filteredItemsState);

  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    if (searchText) {
      setFilteredSneakers(() => {
        if (sneakers && sneakers.length > 0) {
          return sneakers.filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
          );
        }
        return null;
      });
    } else {
      setFilteredSneakers([]);
    }
  }, [searchText]);

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setSearchText((target as HTMLButtonElement).value);
  };

  return (
    <div className="flex items-center border border-solid border-gray-lesslight rounded-xl px-4  mt-5 md:m-0">
      <Image src="/assets/search.svg" width={15} height={15} />
      <input
        className="ml-3 h-11 outline-none border-none text-sm"
        type="text"
        placeholder="Поиск..."
        value={searchText}
        onChange={(e) => handleSearchText(e)}
      />
    </div>
  );
};

export default Search;
