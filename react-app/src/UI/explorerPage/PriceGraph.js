import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import tailwindClassToHex from "../utils/TextToHex";

function PriceGraph({ coin = "Placeholder Coin", color = "emerald-400" }) {
  // Placeholder data (time-series format)
  const price = [
    { time: "12:00", price: 0 },
    { time: "12:05", price: 55 },
    { time: "12:10", price: 53 },
    { time: "12:15", price: 583 },
    { time: "12:20", price: 54 },
    { time: "12:25", price: 560 },
    { time: "12:30", price: 52 },
    { time: "12:35", price: 57 },
    { time: "12:40", price: 59 },
    { time: "12:45", price: 10 },
  ];
  const [data] = useState(price);

  const [hoveredPrice, setHoveredPrice] = useState(data[data.length - 1].price);
  const hexColor = tailwindClassToHex("text-" + color);

  return (
    <div className="bg-gray-800 p-6 shadow-xl rounded-xl border border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-100">{coin}</h2>
        <div className="text-3xl font-semibold" style={{ color: hexColor }}>
          ${hoveredPrice.toFixed(2)}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis
            dataKey="time"
            stroke="#9ca3af"
            tick={{ fill: "#9ca3af" }}
            tickLine={{ stroke: "#9ca3af" }}
          />
          <YAxis
            stroke="#9ca3af"
            tick={{ fill: "#9ca3af" }}
            tickLine={{ stroke: "#9ca3af" }}
          />
          <Tooltip
            cursor={{ stroke: hexColor, strokeWidth: 1 }}
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "1px solid #374151",
              borderRadius: "8px",
              padding: "8px",
              color: "#f3f4f6",
            }}
            formatter={(value) => {
              setHoveredPrice(value);
              return [`$${value.toFixed(2)}`, "Price"];
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke={hexColor}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, fill: hexColor }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PriceGraph;
