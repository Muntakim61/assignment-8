import image1 from "../assets/cart-icon.webp";
import image2 from "../assets/heart-icon-2.webp";
import image3 from "../assets/banner.jpg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="static">
      <div
        className={`${
          location.pathname === "/"
            ? "mt-8 bg-[#9538E2] text-white"
            : "text-black"
        } ${location.pathname === "/" ? "h-[800px] md:h-[600px]" : "" } w-11/12 mx-auto rounded-xl`}
      >
        {/* <div className={`navbar ${location.pathname === "/" ? "mt-8 bg-[#9538E2]" : ""} w-11/12 mx-auto rounded-xl h-[600px]`}> */}
        <div className="navbar mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl "
              >
                <Link to="/">
                  <li>
                    <a
                      className={
                        location.pathname === "/"
                          ? "font-bold underline text-white"
                          : "text-white"
                      }
                    >
                      Home
                    </a>
                  </li>
                </Link>
                <Link to="/stat">
                  <li>
                    <a
                      className={
                        location.pathname === "/stat"
                          ? "font-bold underline text-purple-500"
                          : " text-white"
                      }
                    >
                      Statistics
                    </a>
                  </li>
                </Link>
                <Link to="/dashboard">
                  <li>
                    <a
                      className={
                        location.pathname === "/dashboard"
                          ? "font-bold underline text-purple-500"
                          : " text-white"
                      }
                    >
                      Dashboard
                    </a>
                  </li>
                </Link>
                <Link to="/authors-hub">
                  <li>
                    <a
                      className={
                        location.pathname === "/authors-hub"
                          ? "font-bold underline text-purple-500"
                          : " text-white"
                      }
                    >
                      Author's Hub
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Gadget Heaven</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-10">
              <Link to="/">
                <li>
                  <a
                    className={
                      location.pathname === "/"
                        ? "font-bold underline text-white"
                        : ""
                    }
                  >
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/stat">
                <li>
                  <a
                    className={
                      location.pathname === "/stat"
                        ? "font-bold underline text-purple-500"
                        : ""
                    }
                  >
                    Statistics
                  </a>
                </li>
              </Link>
              <Link to="/dashboard">
                <li>
                  <a
                    className={
                      location.pathname === "/dashboard"
                        ? "font-bold underline text-purple-500"
                        : ""
                    }
                  >
                    Dashboard
                  </a>
                </li>
              </Link>
              <Link to="/authors-hub">
                <li>
                  <a
                    className={
                      location.pathname === "/authors-hub"
                        ? "font-bold underline text-purple-500"
                        : ""
                    }
                  >
                    Author's Hub
                  </a>
                </li>
              </Link>
            </ul>
          </div>
          <div className="navbar-end">
            <Link to="/cart">
              <button className="btn-ghost">
                <img
                  src={image1}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
              </button>
            </Link>

            <Link to="/wishlist">
              <button className="btn-ghost">
                <img
                  src={image2}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
              </button>
            </Link>
          </div>
        </div>
        {/* Banner div */}
        {location.pathname === "/" ? (
          <div className="flex flex-col justify-center items-center gap-6 mt-12">
            <h2 className="text-wrap text-white font-bold text-4xl w-1/2 text-center">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h2>
            <p className="text-white w-2/3 text-center text-sm">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <Link to="/dashboard">
              <button className="btn bg-white text-[#9538E2] font-bold px-4 py-3 rounded-3xl text-xl">
                Shop Now
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      {location.pathname === "/" ? (
        <img
          src={image3}
          alt=""
          className="max-h-[550px] max-w-[1000px] w-8/12 mx-auto rounded-3xl relative bottom-28 md:bottom-48 border-[32px] border-slate-100/50 "
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
