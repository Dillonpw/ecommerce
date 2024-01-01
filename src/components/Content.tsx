import Header from "./Header";
import hero from "/public/hero.jpg";
import Footer from "./Footer";

const Content: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <img
          className="h-auto w-full rounded-lg"
          src={hero}
          alt="clothing on a rack"
        />
      </div>
      <Footer />
    </>
  );
};

export default Content;
