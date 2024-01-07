import Header from "./Header";
import hero from "/public/hero.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Content: React.FC = () => {
  return (
    <>
      <Header />
      <div className="relative bg-slate-800 text-white">
        <span className="flex justify-center p-8 text-6xl">
          Generic items for sale.
        </span>
        <img
          className="h-auto w-full rounded-lg"
          src={hero}
          alt="clothing on a rack"
        />
        <Link
          className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 transform rounded-3xl border-4 border-slate-800 bg-white px-10 py-4 text-4xl text-slate-800 hover:border-white hover:bg-slate-800 hover:text-white"
          to="/store"
        >
          Shop Now
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Content;
