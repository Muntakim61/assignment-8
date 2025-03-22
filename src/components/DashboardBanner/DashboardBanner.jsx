import { useContext, useState ,useEffect} from "react";
import Carts from "../Carts/Carts";
import Wishlists from "../Wishlists/Wishlists";
import { useLocation } from "react-router-dom";

const DashboardBanner = () => {

  const ClickedClass = "text-[#9538E2] bg-white font-extrabold";
  const NotClickedClass = "border-white border-2 text-white bg-[#9538E2]";
  
  const [Active, setActive] = useState("");
  const location = useLocation();
  console.log(location)
  const handleWish= () =>{
    setActive("wishlist")
  }

  useEffect(() => {
    if (location.pathname === "/wishlist") {
      setActive("wishlist");
    }
    else if (location.pathname === "/cart"){
      setActive("cart");
    }
  }, [location.pathname]);






  return (
    <div>
        {/* dashboard banner starts */}
      <div className="bg-[#9538E2]">
        <p className="font-bold text-3xl text-center text-white pt-8">
          Dashboard
        </p>
        <p className="text-white w-1/3 text-center mx-auto mt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className=" flex justify-center gap-6 py-8">
          <button
            className={`px-5 py-1 rounded-full max-w-[100px] ${
              Active === "cart" ? ClickedClass : NotClickedClass
            }`}
            onClick={() => setActive("cart")}
          >
            Cart
          </button>
          <button
            className={`px-4 py-1 rounded-full max-w-[120px] ${
              Active === "wishlist" ? ClickedClass : NotClickedClass
            }`}
            onClick={() => setActive("wishlist")}
          >
            Wishlist
          </button>
        </div>
      </div>
      {/* dashboard banner ends */}
      {/* cart/wishlist starts */}
      {/* <div>
        {
            Active === "cart" ? <Carts></Carts> : <Wishlists></Wishlists>
        }
      </div> */}

     
      {
        Active ==="" ? 
          (<p></p>)
          :
            (Active === "cart" ? <Carts></Carts> : <Wishlists></Wishlists>)
          
      }
      
    </div>
  );
};

export default DashboardBanner;
