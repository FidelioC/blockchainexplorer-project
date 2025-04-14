import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./general/Navbar";
import Home from "./Home";
import Explorer from "./Explorer";
import CoinsInfo from "./CoinsInfo";
import React from "react";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/coinsinfo" element={<CoinsInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
