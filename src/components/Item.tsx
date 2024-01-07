import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Counter from "./Counter";
import Footer from "./Footer";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Item: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return (
    <div>
      <Header />
      <Link
            className="m-6 rounded-2xl border-2 border-white bg-slate-800 p-3 text-3xl font-bold text-white hover:bg-white hover:text-slate-800"
            to="/store"
          >
            Back
          </Link>
      {product ? (
        <div className="mb-60 flex items-center justify-center">
          <img className="m-6 w-80" src={product.image} alt={product.title} />
          <div className="flex flex-col items-center justify-center rounded-xl border-8 border-slate-800 p-4">
            <h2 className="m-2 w-80 text-2xl font-bold">{product.title}</h2>
            <p className="w-80 font-bold">{product.description}</p>
            <div className="mt-4 flex flex-col  items-center rounded-xl bg-slate-800 p-2 text-white">
              <p className="p-3 text-2xl">Price: ${product.price}</p>
              <Counter />
            </div>
          </div>

        </div>
      ) : (
        <h1 className="flex items-center justify-center text-4xl font-bold">
          Loading product...
        </h1>
      )}
      <Footer />
    </div>
  );
};

export default Item;
