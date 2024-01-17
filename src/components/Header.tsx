import React from "react";
import Logo from "./logo";
import NavBar from "./Nav";

const Header: React.FC = () => {
  return (
    <header className="mb-2 flex items-center justify-between p-2 shadow-lg">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
