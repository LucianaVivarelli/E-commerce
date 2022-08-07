import { useState } from "react";
import { CantaoApi } from "./components/CantaoApi/CantaoApi";
import { Cabecalho } from "./components/Cabecalho/Cabecalho";
import { Destaques } from "./components/Destaques/Destaques";
import { Rodape } from "./components/Rodape/Rodape";


export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div >
      <Cabecalho />
      <Destaques />
      <CantaoApi />
      <Rodape />
    </div>
  );
}


