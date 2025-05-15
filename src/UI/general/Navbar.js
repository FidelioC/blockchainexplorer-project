import React from "react";
import { Link } from "react-router-dom";
import { Compass, Coins, BarChart2 } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-xl border-b border-gray-700">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 space-x-8">
          {/* Logo and Title */}
          <Link to="/blockchainexplorer-project" className="flex items-center">
            <BarChart2 className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold text-gray-100">
              Blockchain Explorer
            </span>
          </Link>

          {/* Nav Links */}
          <Link
            to="/"
            className="flex items-center text-gray-300 hover:text-blue-400 pl-2 py-2 rounded-md text-sm font-medium transition-colors"
          >
            <Compass className="h-5 w-5 mr-1.5" />
            Explore
          </Link>
          <Link
            to="/coinsinfo"
            className="flex items-center text-gray-300 hover:text-blue-400 pl-2 py-2 rounded-md text-sm font-medium transition-colors"
          >
            <Coins className="h-5 w-5 mr-1.5" />
            CoinsInfo
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
