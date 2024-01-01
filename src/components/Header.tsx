import Logo from "./logo";
import NavBar from "./Nav";

const Header: React.FC = () => {
  return (
    <div className="mb-8 flex items-center justify-between p-2 shadow-md">
      <Logo />
      <NavBar />
    </div>
  );
};
export default Header;
