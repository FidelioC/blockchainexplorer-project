import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./general/Navbar";
import Home from "./Home";
import Explorer from "./explorerPage/Explorer";
import CoinsInfo from "./CoinsInfo";
import React from "react";
import cryptoDetailsDB from "../DB/crypto_details.json";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/blockchainexplorer-project"
            element={<Home cryptoDetails={cryptoDetailsDB} />}
          />
          <Route
            path="/:coin"
            element={<Explorer cryptoDetails={cryptoDetailsDB} />}
          />
          <Route path="/coinsinfo" element={<CoinsInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
