import { useShop } from "./context/ShopContext";
import Header from "./Header";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useShop();

  return (
    <>
      <Header />
      {cartItems.length > 0 ? (
        <div className="p-2">
          <h1 className="mb-4 border-b-4 border-black text-4xl">Your Cart</h1>
          <ul>
            {cartItems.map((item) => (
              <li
                className="flex flex-col items-center justify-center rounded-xl border-8 border-slate-800"
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
                  Remove
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
        <p>Your cart is empty.</p>
      )}
    </>
  );
};

export default Cart;
