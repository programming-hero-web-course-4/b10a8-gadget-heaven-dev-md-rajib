import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DataContext } from "../../App";

const Statistics = () => {
  const { products } = useContext(DataContext);
  return (
    <div>
      <div className="bg-[#9538E2] py-8">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Gadget Heaven | Statistics</title>
        </Helmet>

        <h1 className="text-white font-bold text-3xl text-center ">
          Statistics
        </h1>

        <p className="text-white mt-5 text-center w-[60%] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <h1 className="text-[#0B0B0B] text-2xl font-bold my-8">Statistics</h1>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={products}
          margin={{ top: 20, right: 20, bottom: 60, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="product_title"
            textAnchor="end"
            interval={0}
            angle={-45}
            tick={{ fontSize: 14, fill: "#000000" }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#9538E2" />
          {/* <Bar dataKey="pv" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
