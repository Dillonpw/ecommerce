import React from "react";
import Logo from "./logo";
import NavBar from "./Nav";

const Header: React.FC = () => {
  return (
    <header className="mb-2 flex items-center justify-between bg-gradient-to-t from-white to-slate-500 p-2 ">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
