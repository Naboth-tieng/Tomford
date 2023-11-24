import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import Products from "./Pages/products";
import Main from "./Pages/main";
import Cart from "./Pages/cart";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.name === product.name);
    if (existingItem) {
      const updatedCart = cartItems.map(item =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter(item => item.name !== product.name);
    setCartItems(updatedCart);
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart Cart={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
    </>
  );
}
