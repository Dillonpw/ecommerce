import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

// Updated Product interface
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string; // URL of the product image
}

const Store: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Header />
      <div className="bg-slate-800">
        <h1 className="ml-4 text-3xl text-white ">Products.</h1>

        {products.length > 0 ? (
          <ul className="b flex flex-wrap justify-center gap-4">
            {products.map((product) => (
              <li
                className="m-2 flex h-80 w-60 flex-col items-center rounded-lg border-8 bg-white p-2"
                key={product.id}
              >
                <img
                  className="w-46 mb-2 h-36 object-cover"
                  src={product.image}
                  alt={product.title}
                />
                <h2 className="mb-1 w-56 overflow-hidden text-ellipsis whitespace-nowrap text-xl">
                  {product.title}
                </h2>
                <p className="mb-1">Price: ${product.price}</p>
              </li>
            ))}
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
