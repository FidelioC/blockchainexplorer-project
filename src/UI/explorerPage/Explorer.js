import React from "react";
import PriceGraph from "./PriceGraph";
import BlockchainDetails from "./BlockchainDetails";
import CryptoStats from "./CryptoStats";

import cryptoDetailsDB from "../../DB/crypto_details.json";
import { useParams } from "react-router-dom";

function Explorer({ cryptoDetails = {} }) {
  const { coin } = useParams();
  // const cryptoDetails = cryptoDetailsDB[coin];
  const coinDetails = cryptoDetails[coin];

  if (!coinDetails) {
    return (
      <div className="min-h-screen bg-gray-900 p-8 text-white">
        Loading or invalid coin: {coin}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-gray-100 mb-8">Explorer Page</h1>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <div>
          <PriceGraph
            coin={coinDetails.display_name}
            color={coinDetails.color}
            price={coinDetails.price}
          />
          <CryptoStats
            coin={coinDetails.display_name}
            stats={coinDetails.stats}
            color={coinDetails.color}
          />
        </div>
        <div>
          <BlockchainDetails
            color={coinDetails.color}
            blocks={coinDetails.blocks}
            transactions={coinDetails.transactions}
          />
        </div>
      </div>
    </div>
  );
}

export default Explorer;
