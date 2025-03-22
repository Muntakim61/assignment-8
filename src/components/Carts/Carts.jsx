import { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/Context";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Helmet} from "react-helmet-async";

const Carts = () => {
  const { cartItems, emptyCart } = useContext(CartContext);
  const [sortedItems, setSortedItems] = useState([]);
  const [Cost, setCost] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handlePurchase = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    emptyCart();
    setCost(0);
    // toast.success("Purchase completed successfully!");
    navigate("/");
  };

  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleSortByPrice = () => {
    const sorted = [...sortedItems].sort((a, b) => b.price - a.price);
    setSortedItems(sorted);
    setIsSorted(true);
  };

  useEffect(() => {
    setCost(calculateTotalCost());
    setSortedItems(cartItems);
  }, [cartItems]);

  


  return (
    <div className="mt-12 w-10/12 mx-auto">
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="Learn more about us on this page" />
      </Helmet>
      <div className="flex justify-between">
        <p className="font-bold">Cart</p>
        <div className="flex justify-end items-center gap-4">
          <p className="font-bold mr-5"> Total cost: $ {Cost}</p>
          <button
            onClick={handleSortByPrice}
            className="btn flex rounded-full bg-white border-2 border-[#9538E2] text-[#9538E2] px-4 font-semibold max-w-[170px]"
          >
            Sort by Price
            <img
              src="https://i.ibb.co.com/Wn5xGTV/sort-icon.jpg"
              alt=""
              className="ml-3 w-5 rounded-btn"
            />
          </button>
          <button
            onClick={handlePurchase}
            className="btn font-medium rounded-full bg-[#9538E2] text-white px-4 max-w-[150px]"
            disabled={Cost === 0}
          >
            Purchase
          </button>
        </div>
      </div>

      <div className="mt-6">
        {sortedItems.length > 0 ? (
          sortedItems.map((item, index) => (
            <Cart key={index} product={item}></Cart>
          ))
        ) : (
          <p className="text-center text-5xl shadow-2xl my-7 p-6 bg-white rounded-lg">
            Oops! <br /> Your cart is empty
          </p>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-4/12 mx-auto h-[350px] max-w-[400px] flex flex-col justify-around items-center">
            <img
              src="https://i.ibb.co.com/YbvYmTJ/Group.png"
              alt=""
              className="w-16"
            />
            <p className="text-xl font-bold text-center mb-4">
              Payment Successful!
            </p>
            <p className="text-center mb-6">Thanks for purchasing.</p>
            <p>Total : $ {Cost}</p>
            <button
              onClick={closeModal}
              className="btn px-4 py-2 rounded-lg w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Carts;
