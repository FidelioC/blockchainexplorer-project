import React from "react";
import CryptoChart from "./PriceGraph";
import BlockchainDetails from "./BlockchainDetails";

import {
  Coins,
  TrendingUp,
  Clock,
  DollarSign,
  BarChart2,
  ArrowUpCircle,
} from "lucide-react";
import stubData from "../../DB/stub_db.json";

const coin = "bitcoin";

function Explorer() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-gray-100 mb-8">Explorer Page</h1>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <div>
          <CryptoChart coin={coin} />
          <CryptoStats stats={stubData[coin].stats} />
        </div>
        <div>
          <BlockchainDetails />
        </div>
      </div>
    </div>
  );
}

function CryptoStats({ stats }) {
  const statItems = [
    {
      icon: TrendingUp,
      label: "Total Transactions",
      value: stats.totalTransactions,
    },
    {
      icon: BarChart2,
      label: "Blockchain Height",
      value: stats.blockchainHeight,
    },
    { icon: DollarSign, label: "Market Cap", value: stats.marketCap },
    { icon: ArrowUpCircle, label: "All Time High", value: stats.allTimeHigh },
    { icon: Clock, label: "Avg. Mined Block", value: stats.avgMinedBlock },
    { icon: Coins, label: "Avg. Transaction", value: stats.avgTransaction },
  ];
  return (
    <div className="bg-gray-800 shadow-xl rounded-xl border border-gray-700 mt-8">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">
          {coin} Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-4 rounded-lg shadow-lg flex items-start border border-gray-700/50"
            >
              <item.icon className="h-6 w-6 text-emerald-400 mr-3 mt-1" />
              <div>
                <h3 className="text-sm font-medium text-gray-400">
                  {item.label}
                </h3>
                <p className="mt-2 text-xl font-semibold text-gray-100">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explorer;
