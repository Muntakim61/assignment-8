import { useContext } from "react";
import { WishContext } from "../WishContext/WishContext";
import { CartContext } from "../Context/Context";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = ({ product }) => {
  const { removeFromWish } = useContext(WishContext);
  const { addToCart } = useContext(CartContext);

  const { product_id, product_title, product_image, price, description } =
    product;

  const notifyAddToCart = () =>
    toast.success(`${product_title} has been added to cart!`);
  const notifyRemoveFromWish = () =>
    toast.error(`${product_title} has been removed from wishlist!`);

  const handleAddToCart = () => {
    addToCart(product);
    notifyAddToCart();
  };

  const handleRemoveClickOnWish = () => {
    removeFromWish(product_id);
    toast.error(`${product_title} has been removed from wishlist!`);
    console.log("product removed");
  };

  return (
    <div className="flex mb-6 shadow-2xl bg-white rounded-2xl">
      <div className="flex items-center">
        <div className="rounded-lg">
          <img
            src={product_image}
            className="w-[200px] h-[200px] object-contain p-4"
            alt={product_title}
          />
        </div>
        <div className="flex flex-col justify-evenly">
          <p className="font-bold text-lg">{product_title}</p>
          <p>
            <span className="font-bold text-md">Description</span>:{" "}
            {description}
          </p>
          <p className="font-bold text-md">Price: ${price}</p>
          <button
            onClick={handleAddToCart}
            className="btn px-3 w-2/3 max-w-[150px] bg-[#9538E2] text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="ml-auto flex items-center mr-5">
        <button
          onClick={handleRemoveClickOnWish}
          className="btn rounded-full border-1 border-red-600"
        >
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

export default Wishlist;
