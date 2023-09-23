import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Payment from "./component/Payment";
import Shipping from "./component/Shipping";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="shipping" element={<Shipping/>} />
        <Route path="payment" element={<Payment/>} />
      </Routes>
    </>
  );
}

export default App;
