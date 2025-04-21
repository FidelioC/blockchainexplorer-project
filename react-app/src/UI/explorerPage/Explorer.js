import React from "react";
import CryptoChart from "./PriceGraph";
import BlockchainDetails from "./BlockchainDetails";
import CryptoStats from "./CryptoStats";

import stubData from "../../DB/stub_db.json";

const coin = "bitcoin";

function Explorer() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-gray-100 mb-8">Explorer Page</h1>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <div>
          <CryptoChart coin={coin} />
          <CryptoStats coin={coin} stats={stubData[coin].stats} />
        </div>
        <div>
          <BlockchainDetails />
        </div>
      </div>
    </div>
  );
}

export default Explorer;
