import { useState } from 'react'
import { CantaoApi } from './components/CantaoApi/CantaoApi'
import { Cabecalho } from './components/Cabecalho/Cabecalho'
import { Destaques } from './components/Destaques/Destaques'
import { Rodape } from './components/Rodape/Rodape'
import './app.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="home">
      <Cabecalho />
      <Destaques />
      <CantaoApi />
      <Rodape />
      
    </div>
  )
}

export default App
