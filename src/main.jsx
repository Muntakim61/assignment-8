import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Errorpage from "./components/Errorpage/Errorpage";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import CardDetail from "./components/CardDetail/CardDetail";
import Authors_Hub from "./components/Authors-Hub/Authors_Hub";
import Stat from "./components/Stat/Stat";
import { CartProvider } from "./components/Context/Context";
import DashboardBanner from "./components/DashboardBanner/DashboardBanner";
import { WishProvider } from "./components/WishContext/WishContext";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: (
          <>
            <Header></Header>,<Home></Home>
          </>
        ),
        errorElement: <Errorpage></Errorpage>,
      },
      {
        path: "Card/:product_id",
        element: (
          <>
            <Header></Header>,<CardDetail></CardDetail>
          </>
        ),
        errorElement: <Errorpage></Errorpage>,
        loader: () => fetch("/cardData.json"),
      },
      {
        path: "dashboard",
        element: (
          <>
            <Header></Header>
            <Dashboard></Dashboard>
          </>
        ),
        errorElement: <Errorpage></Errorpage>,
      },
      {
        path: "authors-hub",
        element: (
          <>
            <Header></Header>
            <Authors_Hub></Authors_Hub>
          </>
        ),
        errorElement: <Errorpage></Errorpage>,
      },
      {
        path: "/stat",
        element: (
          <>
            <Header></Header>
            <Stat></Stat>
          </>
        ),
        errorElement: <Errorpage></Errorpage>,
      },
      {
        path: "/wishlist",
        element: (
          <>
            <Header></Header>
            <DashboardBanner></DashboardBanner>
          </>
        ),
        errorElement: <Errorpage></Errorpage>,
      },
      {
        path: "/cart",
        element: (
          <>
            <Header></Header>
            <DashboardBanner></DashboardBanner>
          </>
        ),
        errorElement: <Errorpage></Errorpage>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <CartProvider>
        <WishProvider>
          <RouterProvider router={router} />
          <ToastContainer position="top-left" autoClose={3000} />
        </WishProvider>
      </CartProvider>
    </HelmetProvider>
  </StrictMode>
);
