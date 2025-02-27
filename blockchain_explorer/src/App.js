import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./general/Navbar";
import Home from "./Home";
import Explorer from "./Explorer";
import CoinsInfo from "./CoinsInfo";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/coinsinfo" element={<CoinsInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
