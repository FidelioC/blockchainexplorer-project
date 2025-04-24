import React, { useState } from "react";
import { Hash, Clock, Boxes, Coins, Copy, CheckCircle } from "lucide-react";
import tailwindClassToHex from "../utils/TextToHex";

// Placeholder data

function BlockchainDetails({
  color = "red-400",
  blocks = [
    {
      hash: "-",
      height: "-",
      time: "-",
      transactions: 0,
    },
  ],
  transactions = [
    {
      hash: "-",
      amount: "-",
      time: "-",
    },
  ],
}) {
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
