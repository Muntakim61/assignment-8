import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { CartContext } from "../Context/Context";
import {
  ComposedChart,
  Bar,
  Area,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Statbar from "../StatBar.jsx/Statbar";

const Stat = () => {
  const { cartItems } = useContext(CartContext);

  // Sample data formatting for the Composed Chart
  const data = cartItems.map((item) => ({
    name: item.product_title,
    price: item.price,
    rating: item.rating,
  }));

  return (
    <div>
      <Helmet>
        <title>Statpage</title>
        <meta name="description" content="Learn more about us on this page" />
      </Helmet>
      <Statbar></Statbar>
      <p className="w-11/12 mx-auto font-bold text-2xl">Statistics</p>

      <div className="w-11/12 mx-auto bg-white my-12 py-12 shadow-2xl rounded-2xl">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Area
              type="monotone"
              dataKey="price"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="price" barSize={20} fill="#413ea0" />
            <Scatter dataKey="rating" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stat;
