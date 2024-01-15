import React, { useState } from "react";
import { useShop } from "./context/ShopContext";
import { Button } from "@/components/ui/button";


interface CounterProps {
  product: Product;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const Counter: React.FC<CounterProps> = ({ product }) => {
  const { addToCart, removeFromCart } = useShop();
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      removeFromCart(product.id);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="flex gap-4 text-2xl">
        <button className="font-bold hover:scale-150" onClick={decrementCount}>
          -
        </button>
        <p>{count}</p>
        <button className="font-bold hover:scale-150" onClick={incrementCount}>
          +
        </button>
      </div>
      <Button
        className="mt-2 rounded-xl border-2 border-white bg-slate-800 p-2 font-bold text-white hover:bg-white hover:border-slate-800 hover:text-slate-800"
        onClick={() => addToCart(product, count)}
      >
        Add to Cart
      </Button>
    </>
  );
};

export default Counter;
