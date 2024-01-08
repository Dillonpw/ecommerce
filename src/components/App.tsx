import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./Content";
import Store from "./Store";
import Cart from "./Cart";
import Item from "./Item";
import { ShopProvider } from "./context/ShopContext";

const App = () => {
  return (
    <ShopProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/store" element={<Store />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ShopProvider>
  );
};

export default App;
