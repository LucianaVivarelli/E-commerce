import React from 'react'
import { Cabecalho } from '../../components/Cabecalho/Cabecalho'
import { Colection } from '../Colection/Colection'
import { Rodape } from '../../components/Rodape/Rodape'
import { Destaques } from '../../components/Destaques/Destaques'
import { Link }  from 'react-router-dom'
import { Divisor } from '../../components/Divisor/Divisor'

export const Home = () => {
  return (
    <div>
        <Cabecalho />
        <Destaques />
        <Colection />
        <Divisor texto={"Novidade"} />
        <Rodape />
       
    </div>
  )
}
