import { useContext } from "react";
import { CartContext } from "../Context/Context";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ product }) => {
  const { removeFromCart } = useContext(CartContext);

  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
  } = product;

  const notify = () => toast.warn(`Item has been removed from cart!`);

  const handleRemoveClick = () => {
    removeFromCart(product_id);
    notify();
  };

  return (
    <div className="flex mb-6 shadow-lg">
      <div className="flex items-center">
        <div className="rounded-lg">
          <img
            src={product_image}
            className="w-[200px] h-[124px] object-contain p-4 rounded-full"
            alt={product_title}
          />
        </div>
        <div>
          <p>{product_title}</p>
          <p>{description}</p>
          <p>Price : ${price}</p>
        </div>
      </div>
      <div className="ml-auto flex items-center mr-5">
        <button onClick={handleRemoveClick} className="btn rounded-full border-1 border-red-600">
          <img
            src="https://i.ibb.co.com/TL16VSm/icons8-cross-48.png"
            alt=""
            className="w-5"
          />
        </button>
      </div>
    </div>
  );
};

export default Cart;
