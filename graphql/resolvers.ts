import { Resolvers, Sneakers } from "./types";

// MOCK DATA
const SNEAKERS: Sneakers[] = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    _id: "5cf00cbb-690a-42eb-b4b4-f64530d93311",
    photoUrl: "/assets/sneakers/1.svg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    _id: "b2c4dc65-db50-45dc-a44e-67c30d019a96",
    photoUrl: "/assets/sneakers/2.svg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    _id: "b2c4dc65-db50-45dc-a44e-67c30d119a54",
    photoUrl: "/assets/sneakers/3.svg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    _id: "c06de664-fd92-4882-bcb5-b2586660f6fe",
    photoUrl: "/assets/sneakers/4.svg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    _id: "c06de664-fd92-4882-bcb5-b2586660f6ddfe",
    // photoUrl: "",
  },
];

const resolvers: Resolvers = {
  Query: {
    allSneakers: () => SNEAKERS,
    Sneakers: (_: any, { _id }) =>
      SNEAKERS.find((item) => item._id === _id) as any,
  },
};

export default resolvers;
