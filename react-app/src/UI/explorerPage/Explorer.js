import React from "react";
import PriceGraph from "./PriceGraph";
import BlockchainDetails from "./BlockchainDetails";
import CryptoStats from "./CryptoStats";

import cryptoDetailsDB from "../../DB/crypto_details.json";
import { useParams } from "react-router-dom";

function Explorer() {
  const { coin } = useParams();
  const cryptoDetails = cryptoDetailsDB[coin];
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-gray-100 mb-8">Explorer Page</h1>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <div>
          <PriceGraph
            coin={cryptoDetails.display_name}
            color={cryptoDetails.color}
            price={cryptoDetails.price}
          />
          <CryptoStats
            coin={cryptoDetails.display_name}
            stats={cryptoDetails.stats}
            color={cryptoDetails.color}
          />
        </div>
        <div>
          <BlockchainDetails
            color={cryptoDetails.color}
            blocks={cryptoDetails.blocks}
            transactions={cryptoDetails.transactions}
          />
        </div>
      </div>
    </div>
  );
}

export default Explorer;
