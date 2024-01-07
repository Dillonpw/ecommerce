import { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
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
      <button
        className="rounded-xl bg-slate-800 p-2 font-bold border-white mt-2 border-2 text-white hover:bg-white hover:text-slate-800"
        onClick={incrementCount}
      >
        Add to Cart
      </button>
    </>
  );
};

export default Counter;
