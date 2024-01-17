import { useShop } from "./context/ShopContext";
import Header from "./Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "./Footer";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useShop();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.quantity * item.product.price;
  }, 0);

  return (
    <>
      <Header />
      <h1 className="m-4 text-4xl">Your Cart</h1>

      {cartItems.length > 0 ? (
        <main className="grid grid-cols-1 p-2 md:grid-cols-2">
          <ul className=" col-span-1 flex flex-col items-center">
            {cartItems.map((item) => (
              <li
                className="m-2 w-80 flex-col items-center justify-center"
                key={item.product.id}
              >
                <img
                  className="mx-auto mb-2 h-60 object-cover pr-2"
                  src={item.product.image}
                  alt={item.product.title}
                />
                {item.product.title} <br /> <b>Quantity:</b> {item.quantity}{" "}
                <br /> <b>Price:</b> ${item.product.price} <br />
                <Button
                  className="m-4 rounded-2xl border-2 border-slate-800 bg-white px-6 py-6 text-lg text-slate-800 hover:border-white hover:bg-slate-800 hover:text-white"
                  onClick={() => removeFromCart(item.product.id)}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <Card className="h-fit rounded-xl bg-gray-200 md:w-[80%] ">
            <CardHeader>
              <CardTitle>Ready To Check Out?</CardTitle>
              <CardDescription className="text-2xl">
                Total: ${totalPrice.toFixed(2)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-4" action="submit">
                <label htmlFor="name">Payment Info: </label>
                <input
                  className="h-10 w-[90%] border-2 pl-2"
                  type="text"
                  id="name"
                  placeholder="Name on card"
                />
                <label htmlFor="cardNum">Card Number: </label>
                <input
                  className="h-10 w-[90%] border-2 pl-2"
                  type="text"
                  placeholder="1234-5678-9876-5432"
                />
              </form>
            </CardContent>
            <CardFooter>
              <Button
                className="m-4 rounded-2xl border-2 border-slate-800 bg-white px-6 py-6 text-lg text-slate-800 hover:border-white hover:bg-slate-800 hover:text-white"
                onClick={() => clearCart()}
              >
                Checkout
              </Button>
            </CardFooter>
          </Card>
        </main>
      ) : (
        <p className="flex items-center justify-center p-10 text-6xl">
          Nothing to see here!
        </p>
      )}
          <Footer/>

    </>
  );
};

export default Cart;
