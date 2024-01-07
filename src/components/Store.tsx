import { Link } from "react-router-dom";
import { ShopProvider, useShop } from "./context/ShopContext";

import Header from "./Header";
import Counter from "./Counter";
import Footer from "./Footer";

const Store: React.FC = () => {
  const { products } = useShop();

  return (
    <>
      <ShopProvider>
        <Header />
        <div className="bg-slate-800">
          <h1 className="m-4 p-2 text-3xl text-white">Products.</h1>

          {products.length > 0 ? (
            <ul className="flex flex-wrap justify-center gap-4">
              {products.map((product) => (
                <li
                  className="m-2 flex h-80 w-60 flex-col items-center justify-center rounded-lg border-8 bg-white p-2"
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
                  <Counter />
                </li>
              ))}
            </ul>
          ) : (
            <h2 className="flex justify-center text-4xl">
              Loading products...
            </h2>
          )}
        </div>
      </ShopProvider>
      <Footer />
    </>
  );
};

export default Store;
