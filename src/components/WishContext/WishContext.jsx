import React, { createContext, useState } from 'react';

export const WishContext = createContext();

export const WishProvider = ({ children }) => {
  const [wishItems, setWishItems] = useState([]);

  const addToWish = (item) => {
    setWishItems((prevItems) => [...prevItems, item]);
  };

  const removeFromWish = (product_id) => {
    // console.log("Delete button pressed by Id : "+product_id );
    setWishItems((prevItems) => prevItems.filter(item => item.product_id !== product_id));
  };
  
  const emptyWish =() =>{
    setWishItems((prevItems) => []);
  }

  return (
    <WishContext.Provider value={{ wishItems, addToWish ,  removeFromWish , emptyWish}}>
      {children}
    </WishContext.Provider>
  );
};
