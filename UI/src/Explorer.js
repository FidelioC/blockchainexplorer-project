import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PriceChart = ({ coin = "Placeholder Coin" }) => {
  // Placeholder data (time-series format)
  const [data] = useState([
    { time: "12:00", price: 50 },
    { time: "12:05", price: 55 },
    { time: "12:10", price: 53 },
    { time: "12:15", price: 58 },
    { time: "12:20", price: 54 },
    { time: "12:25", price: 56 },
    { time: "12:30", price: 52 },
    { time: "12:35", price: 57 },
    { time: "12:40", price: 59 },
    { time: "12:45", price: 55 },
  ]);

  const [hoveredPrice, setHoveredPrice] = useState(data[data.length - 1].price);

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{coin}</h2>
        <div className="text-3xl font-semibold text-green-600">
          ${hoveredPrice.toFixed(2)}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis
            dataKey="time"
            stroke="#64748b"
            tick={{ fill: "#64748b" }}
            tickLine={{ stroke: "#64748b" }}
          />
          <YAxis
            stroke="#64748b"
            tick={{ fill: "#64748b" }}
            tickLine={{ stroke: "#64748b" }}
          />
          <Tooltip
            cursor={{ stroke: "#6366f1", strokeWidth: 1 }}
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              padding: "8px",
            }}
            formatter={(value) => {
              setHoveredPrice(value);
              return [`$${value.toFixed(2)}`, "Price"];
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#6366f1"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, fill: "#6366f1" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
