import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; // Importing the correct icon
import { useShop } from "./context/ShopContext";

const NavBar: React.FC = () => {
  const { cartItems } = useShop();

  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <nav className="p-4">
      <Link
        className="m-2 rounded-lg p-2 text-4xl hover:bg-slate-800 hover:text-white"
        to="/store"
      >
        Store
      </Link>
      <Link
        className="m-2 rounded-lg p-2 text-4xl hover:bg-slate-800 hover:text-white"
        to="/cart"
      >
        <FontAwesomeIcon icon={faCartShopping} /> {totalItemsInCart}{" "}
      </Link>
    </nav>
  );
};

export default NavBar;
