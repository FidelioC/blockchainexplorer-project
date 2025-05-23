import React, { useState } from "react";
import { Search, TrendingUp, Star, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home({ cryptoDetails = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explorer?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const featuredCoins = Object.entries(cryptoDetails).map(([key, value]) => ({
    id: key,
    ...value,
  }));
  console.log(featuredCoins);
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section with Search */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Explore the World of Cryptocurrency
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Track real-time cryptocurrency prices, market caps, and blockchain
              details
            </p>

            <form
              onSubmit={handleSearch}
              className="max-w-2xl mx-auto relative"
            ></form>
          </div>
        </div>
      </div>

      {/* Discover Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold flex items-center">
            <TrendingUp className="h-8 w-8 mr-3 text-blue-400" />
            Discover
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCoins.map((coin) => (
            <div
              key={coin.symbol}
              className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500 transition-colors cursor-pointer"
              onClick={() => navigate(`/${coin.id}`)}
            >
              <div className="h-48 overflow-hidden bg-gray-900 flex items-center justify-center">
                <img
                  src={coin.symbol_image}
                  alt={coin.symbol}
                  className="object-contain transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold flex items-center">
                    {coin.display_name}
                    <span className="text-gray-400 text-sm ml-2">
                      {coin.symbol}
                    </span>
                  </h3>
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold">
                      {coin.stats.currentPrice}
                    </p>
                    <p
                      className={`text-sm ${
                        coin.stats.change.startsWith("-")
                          ? "text-red-400"
                          : "text-emerald-400"
                      }`}
                    >
                      {coin.stats.change}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Market Cap</p>
                    <p className="font-semibold">{coin.stats.marketCap}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
