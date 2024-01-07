import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./Content";
import Store from "./Store";
import Item from "./Item";

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/store" element={<Store />} />
            <Route path="/item/:id" element={<Item />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};
export default App;
