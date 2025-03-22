import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (product_id) => {
    console.log("Delete button pressed by Id : " + product_id );
    setCartItems((prevItems) => prevItems.filter(item => item.product_id !== product_id));
  };
  
  const emptyCart =() =>{
    setCartItems((prevItems) => []);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart ,  removeFromCart , emptyCart}}>
      {children}
    </CartContext.Provider>
  );
};
