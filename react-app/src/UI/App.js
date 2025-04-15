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
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Router>
        <Navbar />
        <Routes>
          {/* Redirect root path to /home */}
          <Route path="/" element={<Home />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/coinsinfo" element={<CoinsInfo />} />
          {/* Catch all unknown routes and redirect to /home */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
