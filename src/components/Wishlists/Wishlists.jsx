import { useContext } from "react";
import { WishContext } from "../WishContext/WishContext";
import Wishlist from "../Wishlist/Wishlist";
import { Helmet} from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";


const Wishlists = () => {
  const { wishItems, removeFromWish, emptyWish } = useContext(WishContext);
//   console.log( wishItems.length );


// const notify = () => toast.error("Item has been removed from cart!");;

  return (
    <div className="mt-12 w-10/12 mx-auto">
      <Helmet>
        <title>Wishlist</title>
        <meta name="description" content="Learn more about us on this page" />
      </Helmet>
      {/* Wishlist header starts */}
      <div className="">
        <p className="font-bold text-2xl">Wishlist</p>
      </div>
      {/* Wishlist header ends */}

      {/* main card starts */}
      <div className="mt-6">
        {wishItems.length >0 ? (
        //   console.log("Cart is not empty");
          wishItems.map( (item,index) =>
          <Wishlist key={index} product={item}></Wishlist>
        )
        ) : (
          <p className="text-center text-5xl shadow-2xl my-7 p-6 bg-white rounded-lg">
            Oops! <br /> Your wishlist is empty
          </p>
        )}
      </div>
    </div>
  );
};

export default Wishlists;
