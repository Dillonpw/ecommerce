import { Link } from "react-router-dom";
import { useShop } from "./context/ShopContext";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import Header from "./Header";
import Counter from "./Counter";
import Footer from "./Footer";

const Store: React.FC = () => {
  const { products } = useShop();

  return (
    <>
      <Header />
      <div className="bg-slate-800">
        <div className="flex items-center justify-between">
          <h1 className="m-2 p-2 text-4xl font-bold text-white">Products.</h1>
          <Alert className="m-4 w-fit border-4">
            <AlertTitle>Before you Ask!</AlertTitle>
            <AlertDescription>
              All items are one size fits some!
            </AlertDescription>
          </Alert>
        </div>
        {products.length > 0 ? (
          <ul className="flex flex-wrap justify-center gap-4">
            {products.map((product) => (
              <li
                className="m-2 flex h-80 w-60 flex-col items-center justify-center rounded-lg bg-white p-2"
                key={product.id}
              >
                <Link to={`/item/${product.id}`} className="text-center">
                  <img
                    className="mx-auto mb-2 h-36 object-cover hover:scale-110"
                    src={product.image}
                    alt={product.title}
                  />
                </Link>

                <h2 className="w-56 overflow-hidden text-ellipsis whitespace-nowrap text-center text-xl">
                  {product.title}
                </h2>
                <p className="mb-1">Price: ${product.price}</p>
                <Counter product={product} />
              </li>
            ))}
            <AlertDialog>
              <AlertDialogTrigger>
                <div className="hover:jiggle m-4 rounded-lg border-4 bg-white p-6 hover:bg-gray-200">
                  Want to know when we relase new items?{" "}
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Get Updates when we drop something new!
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Please Enter your email address or phone number to get
                    notified.
                  </AlertDialogDescription>
                  <label htmlFor="email">Email:</label>
                  <input className="w-[60%] border-2" type="email" />
                  <label htmlFor="phone">Phone:</label>
                  <input className="w-[60%] border-2" type="tel" />
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </ul>
        ) : (
          <h2 className="flex justify-center text-4xl">Loading products...</h2>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Store;
