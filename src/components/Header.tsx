import React from "react";
import Logo from "./logo";
import NavBar from "./Nav";

const Header: React.FC = () => {
  return (
    <header className="mb-10 flex items-center justify-between bg-gray-200 p-2">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
