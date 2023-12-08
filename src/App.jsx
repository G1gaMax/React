import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import Home from "./pages/Home";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "../context/CartContext";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/home" element={<Home />} />
            <Route path="/:categoryID" element={<ItemListContainer />} />
            <Route path="/item/:productID" element={<ItemDetailContainer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
