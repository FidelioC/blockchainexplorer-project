import React, { useState } from "react";
import { Hash, Clock, Boxes, Coins, Copy, CheckCircle } from "lucide-react";
import tailwindClassToHex from "../utils/TextToHex";

// Placeholder data
const blocks = [
  {
    hash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
    height: "828,394",
    time: "2024-03-15 14:23:45",
    transactions: 2453,
  },
  {
    hash: "00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048",
    height: "828,393",
    time: "2024-03-15 14:22:12",
    transactions: 1876,
  },
  {
    hash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26c",
    height: "828,392",
    time: "2024-03-15 14:20:55",
    transactions: 2102,
  },
  {
    hash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
    height: "828,394",
    time: "2024-03-15 14:23:45",
    transactions: 2453,
  },
  {
    hash: "00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048",
    height: "828,393",
    time: "2024-03-15 14:22:12",
    transactions: 1876,
  },
  {
    hash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26c",
    height: "828,392",
    time: "2024-03-15 14:20:55",
    transactions: 2102,
  },
  {
    hash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
    height: "828,394",
    time: "2024-03-15 14:23:45",
    transactions: 2453,
  },
  {
    hash: "00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048",
    height: "828,393",
    time: "2024-03-15 14:22:12",
    transactions: 1876,
  },
  {
    hash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26c",
    height: "828,392",
    time: "2024-03-15 14:20:55",
    transactions: 2102,
  },
  {
    hash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
    height: "828,394",
    time: "2024-03-15 14:23:45",
    transactions: 2453,
  },
  {
    hash: "00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048",
    height: "828,393",
    time: "2024-03-15 14:22:12",
    transactions: 1876,
  },
  {
    hash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26c",
    height: "828,392",
    time: "2024-03-15 14:20:55",
    transactions: 2102,
  },
];

const transactions = [
  {
    hash: "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
    amount: "10.23",
    time: "2024-03-15 14:23:45",
  },
  {
    hash: "a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d",
    amount: "5.78",
    time: "2024-03-15 14:22:12",
  },
  {
    hash: "0437cd7f8525ceed2324359c2d0ba26006d92d856a9c20fa0241106ee5a597c9",
    amount: "15.45",
    time: "2024-03-15 14:20:55",
  },
  {
    hash: "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
    amount: "10.23",
    time: "2024-03-15 14:23:45",
  },
  {
    hash: "a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d",
    amount: "5.78",
    time: "2024-03-15 14:22:12",
  },
  {
    hash: "0437cd7f8525ceed2324359c2d0ba26006d92d856a9c20fa0241106ee5a597c9",
    amount: "15.45",
    time: "2024-03-15 14:20:55",
  },
  {
    hash: "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
    amount: "10.23",
    time: "2024-03-15 14:23:45",
  },
  {
    hash: "a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d",
    amount: "5.78",
    time: "2024-03-15 14:22:12",
  },
  {
    hash: "0437cd7f8525ceed2324359c2d0ba26006d92d856a9c20fa0241106ee5a597c9",
    amount: "15.45",
    time: "2024-03-15 14:20:55",
  },
  {
    hash: "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
    amount: "10.23",
    time: "2024-03-15 14:23:45",
  },
  {
    hash: "a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d",
    amount: "5.78",
    time: "2024-03-15 14:22:12",
  },
  {
    hash: "0437cd7f8525ceed2324359c2d0ba26006d92d856a9c20fa0241106ee5a597c9",
    amount: "15.45",
    time: "2024-03-15 14:20:55",
  },
  {
    hash: "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
    amount: "10.23",
    time: "2024-03-15 14:23:45",
  },
  {
    hash: "a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d",
    amount: "5.78",
    time: "2024-03-15 14:22:12",
  },
  {
    hash: "0437cd7f8525ceed2324359c2d0ba26006d92d856a9c20fa0241106ee5a597c9",
    amount: "15.45",
    time: "2024-03-15 14:20:55",
  },
];

function BlockchainDetails({ color = "red-400" }) {
  const hexColor = tailwindClassToHex("bg-" + color);
  const [activeTab, setActiveTab] = useState("blocks");

  const [copiedHash, setCopiedHash] = useState("");

  const copyToClipboard = async (hash) => {
    try {
      await navigator.clipboard.writeText(hash);
      setCopiedHash(hash);
      setTimeout(() => setCopiedHash(""), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const HashCell = ({ hash }) => (
    <td className="px-4 py-3 text-gray-300 group relative">
      <div className="flex items-center space-x-2">
        <span className="transition-opacity">{hash.substring(0, 16)}...</span>
        <button
          onClick={() => copyToClipboard(hash)}
          className="text-gray-400 hover:text-blue-400 transition-colors"
          title="Copy hash"
        >
          {copiedHash === hash ? (
            <CheckCircle className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
      <div className="absolute -top-8 left-0 opacity-0 group-hover:opacity-100 bg-gray-700 text-gray-100 text-sm px-2 py-1 rounded-md transition-opacity whitespace-nowrap">
        {hash}
      </div>
    </td>
  );

  return (
    <div className="bg-gray-800 shadow-xl rounded-xl border border-gray-700">
      <div className="p-6">
        <div className="flex space-x-4 mb-6">
          <button
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              activeTab === "blocks"
                ? "text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
            style={activeTab === "blocks" ? { backgroundColor: hexColor } : {}}
            onClick={() => setActiveTab("blocks")}
          >
            <Boxes className="h-5 w-5 mr-2" />
            Blocks Details
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              activeTab === "transactions"
                ? " text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
            style={
              activeTab === "transactions" ? { backgroundColor: hexColor } : {}
            }
            onClick={() => setActiveTab("transactions")}
          >
            <Coins className="h-5 w-5 mr-2" />
            Transaction Details
          </button>
        </div>

        <div className="max-h-[633px] overflow-y-auto overflow-x-auto rounded-lg border border-gray-700">
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                {activeTab === "blocks" ? (
                  <>
                    <th className="px-4 py-3 text-left">Hash</th>
                    <th className="px-4 py-3 text-left">Block Height</th>
                    <th className="px-4 py-3 text-left">Time</th>
                    <th className="px-4 py-3 text-left">Transactions</th>
                  </>
                ) : (
                  <>
                    <th className="px-4 py-3 text-left">Hash</th>
                    <th className="px-4 py-3 text-left">Amount (BTC)</th>
                    <th className="px-4 py-3 text-left">Time</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {activeTab === "blocks"
                ? blocks.map((block, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors"
                    >
                      <HashCell hash={block.hash} />
                      <td className="px-4 py-3 text-gray-300">
                        {block.height}
                      </td>
                      <td className="px-4 py-3 text-gray-300">{block.time}</td>
                      <td className="px-4 py-3 text-gray-300">
                        {block.transactions}
                      </td>
                    </tr>
                  ))
                : transactions.map((tx, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors"
                    >
                      <HashCell hash={tx.hash} />
                      <td className="px-4 py-3 text-gray-300">{tx.amount}</td>
                      <td className="px-4 py-3 text-gray-300">{tx.time}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BlockchainDetails;
