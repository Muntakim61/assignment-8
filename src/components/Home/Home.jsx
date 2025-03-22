import { useState } from "react";
import Cards from "../Cards/Cards";
import "./Home.css";
import { Helmet} from "react-helmet-async";

const Home = () => {
  

  const [activeCategory, setActiveCategory] = useState("All Products");

  const categories = [
    "All Products",
    "Laptop",
    "Phone",
    "Smart watch",
    "Macbook",
  ];

  return (
    <div className="w-10/12 mx-auto">
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="Learn more about us on this page" />
      </Helmet>
      <div className="mb-12">
        <p className="font-bold text-4xl text-center">
          Explore Cutting-Edge Gadgets
        </p>
      </div>
      <div>
        <div className="grid grid-cols-4 mb-28">
          <div className="row-span-full flex flex-col items-center rounded-2xl gap-8 pt-16 shadow-2xl bg-white w-2/3 h-fit">
            {categories.map((category) => (
              <button
                key={category}
                className={`btn md:btn-ghost text-xs md:text-base bg-slate-200 w-2/3 md:w-1/3 md:mx-right
                    ${activeCategory === category ? "Active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="col-span-3 gap-4">
            <Cards category={activeCategory}></Cards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
