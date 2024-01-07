import React from 'react';
import Logo from "./logo";
import { useShop } from "./context/ShopContext";
import NavBar from "./Nav";

const Header: React.FC = () => {
  const { cartItems } = useShop();
  
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="mb-8 flex items-center justify-between p-2 shadow-lg">
      <Logo />
      <NavBar />
      <div>
        <span>symbol {totalItemsInCart}</span>
      </div>
    </div>
  );
};

export default Header;
