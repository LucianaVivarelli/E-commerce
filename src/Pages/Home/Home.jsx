import React from 'react'
import { Cabecalho } from '../../components/Cabecalho/Cabecalho'
import { Colection } from '../Colection/Colection'
import { Rodape } from '../../components/Rodape/Rodape'
import { Destaques } from '../../components/Destaques/Destaques'
import { Link }  from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <Cabecalho />
        <Destaques />
        <Colection />
        <Rodape />
    </div>
  )
}
