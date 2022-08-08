import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home'
import { Login } from './Pages/Login/Login'
import { Colection } from './Pages/Colection/Colection'
import { Bazar } from './Pages/Bazar/Bazar'
import { Stores } from './Pages/Stores/Stores'
import { Off } from './Pages/Off/Off'
import { Divisor } from "./components/Divisor/Divisor";
import { CantaoApi } from "./components/CantaoApi/CantaoApi";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
     <Router>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Login" element={<Login />} />
         <Route path="/CantaoApi" element={<CantaoApi />} />
         <Route path="/Colection" element={<Colection />} />
         <Route path="/Bazar" element={<Bazar />} />
         <Route path="/Stores" element={<Stores />} />
         <Route path="/Off" element={<Off />} />
         <Route path="/Divisor" element={<Divisor />} />

      </Routes>
 </Router>
  );
};
