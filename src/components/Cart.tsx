import { useShop } from "./context/ShopContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useShop();

  return (
    <div>
      <p>Your Cart</p>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product.id}>
              {item.product.title} - Quantity: {item.quantity}
              <button onClick={() => removeFromCart(item.product.id)}>
                Remove
              </button>
              <button onClick={() => clearCart()}>Checkout</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
