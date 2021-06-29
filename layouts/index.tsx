import React from "react";

import Cart from "../components/Cart";
import Header from "../components/Header";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Cart />
    </>
  );
};

export default Layout;
