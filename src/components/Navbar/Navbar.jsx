import image1 from "../assets/cart-icon.webp";
import image2 from "../assets/heart-icon-2.webp";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Define the active class for styling
  const activeClass = "font-bold underline text-purple-500";
  const activeClass2 = "font-bold underline text-white";

  return (
    <div className="navbar w-10/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl"
          >
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
        <a className="btn btn-ghost text-xl font-bold">Gadget Heaven</a>
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
  );
};

export default Navbar;
