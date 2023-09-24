import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Payment from "./component/Payment";
import Shipping from "./component/Shipping";
import About from "./component/About";
import Login from "./component/Login/Login"
import Register from "./component/Register/Register";
import Entry from "./component/Entry";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="shipping" element={<Shipping/>} />
        <Route path="payment" element={<Payment/>} />
        <Route path="/" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="about" element={<About />} />
        <Route path="entry" element={<Entry />} />
      </Routes>
    </>
  );
}

export default App;
