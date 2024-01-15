import { Link } from "react-router-dom";
import logo from "/public/shop.png";

const Logo: React.FC = () => {
  return (
    <>
      <Link to="/" id="logo">
        <img className="h-auto w-auto" src={logo} alt="Logo" />
      </Link>
    </>
  );
};
export default Logo;
