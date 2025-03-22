import { useLoaderData, useParams } from "react-router-dom";
import "./ProductBanner.css";
import { useContext, useState } from "react";
import { CartContext } from "../Context/Context";
import { WishContext } from "../WishContext/WishContext";
import React from "react";
import { toast } from "react-toastify";
import { Helmet} from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";

// import { ToastContainer, toast } from 'react-hot-toast';
// import "react-toastify/dist/ReactToastify.css";

const ProductBanner = ({ id }) => {
  // console.log(typeof id);
  const ID = parseInt(id);
  // console.log(typeof ID);
  const data = useLoaderData();
  // console.log(data);
  const productData = data.find((item) => parseInt(item.product_id) === ID);
  // console.log(productData);
  const { cartItems, addToCart } = useContext(CartContext);
  const { wishItems, addToWish } = useContext(WishContext);
  // console.log(cartItems);

  const [Disabled, setDisabled] = useState(false);
  const handleClick = () => {
    console.log("Button clicked!");
    setDisabled(true);
  };

  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = productData;

  const notify = () =>
    toast.success(`${product_title} has been successfully added to cart!`);
  const notify2 = () =>
    toast.success(`${product_title} has been successfully added to wishlist!`);

  return (
    <div className="static">
      <Helmet>
        <title>Product Details Page</title>
        <meta name="description" content="Learn more about us on this page" />
      </Helmet>
      <div className="bg-[#9538E2] text-center h-[350px] pt-8">
        <h3 className="font-bold text-white text-3xl w-1/2 mx-auto">
          Product Details
        </h3>
        <p className="text-white w-1/3 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="relative bottom-56">
        <div className="bg-slate-100 w-8/12 mx-auto rounded-3xl p-6 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8">
            <img
              src={product_image}
              alt={product_title}
              className="max-w-sm rounded-lg shadow-2xl object-contain h-full max-h-[400px]"
            />
            <div className="flex flex-col justify-around">
              <h1 className="text-5xl font-bold mb-2">{product_title}</h1>
              <p className="text-xl font-bold  mb-2">Price: ${price}</p>
              <button
                className={`btn btn-xs max-w-32 ${
                  availability ? "Active-2" : "Active-3"
                }`}
              >
                {availability ? "In stock" : "Not in stock"}
              </button>
              <p className="py-6">{description}</p>
              <div className="mb-3">
                <h3 className="font-bold text-lg">Specifications:</h3>
                {specification.map((spec, index) => (
                  <p key={index}>
                    <span className="font-bold">{index + 1}.</span> {spec}
                  </p>
                ))}
              </div>
              <p className="text-xl font-bold  mb-2">Rating</p>
              <div className="flex gap-6 mb-2">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p>{rating}</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    addToCart(productData);
                    notify();
                  }}
                  className="btn bg-[#9538E2] rounded-full text-white"
                >
                  Add to Cart{" "}
                  <img
                    src="https://i.ibb.co.com/JkNgW5F/icons8-cart-50.png
"
                    alt=""
                    className="w-5"
                  />
                </button>

                <button
                  onClick={() => {
                    handleClick();
                    addToWish(productData);
                    notify2();
                  }}
                  disabled={Disabled}
                  className="btn rounded-full border-1 border-black"
                >
                  <img
                    src="https://i.ibb.co.com/64gRWY0/icons8-heart-50.png"
                    alt=""
                    className="w-5 text-[#9538E2]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;


// https://i.ibb.co.com/TL16VSm/icons8-cross-48.png
// https://i.ibb.co.com/JkNgW5F/icons8-cart-50.png
// https://i.ibb.co.com/64gRWY0/icons8-heart-50.png