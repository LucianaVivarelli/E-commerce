import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Colection } from "./Pages/Colection/Colection";
import { Divisor } from "./components/Divisor/Divisor";
import { CantaoApi } from "./components/CantaoApi/CantaoApi";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CantaoApi" element={<CantaoApi />} />
        <Route path="/Colection" element={<Colection />} />
        <Route path="/Divisor" element={<Divisor />} />
      </Routes>
    </Router>
  );
};
