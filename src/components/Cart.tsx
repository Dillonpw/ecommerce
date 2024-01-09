import { useShop } from "./context/ShopContext";
import Header from "./Header";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useShop();

  return (
    <>
      <Header />
      {cartItems.length > 0 ? (
        <div className="p-2">
          <h1 className="mb-4 text-4xl">Your Cart</h1>
          <ul className="flex flex-col">
            {cartItems.map((item) => (
              <li
                className="m-4 items-center justify-center rounded-xl border-8 border-slate-800 p-4 md:flex md:w-[40%]"
                key={item.product.id}
              >
                <img
                  className="mx-auto mb-2 h-36 object-cover"
                  src={item.product.image}
                  alt={item.product.title}
                />
                {item.product.title} - Quantity: {item.quantity}
                <button
                  className="m-4 rounded-2xl border-4 border-slate-800 bg-white px-2 py-2 text-lg text-slate-800 hover:border-white hover:bg-slate-800 hover:text-white"
                  onClick={() => removeFromCart(item.product.id)}
                >
                  Remove from cart
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <button
              className="mt-6 rounded-2xl border-4 border-slate-800 bg-white px-2 py-2 text-lg text-slate-800 hover:border-white hover:bg-slate-800 hover:text-white"
              onClick={() => clearCart()}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="flex items-center justify-center p-10 text-6xl">
          Nothing to see here!
        </p>
      )}
    </>
  );
};

export default Cart;
