import React from 'react'
import Styles from './Botao.module.css'

 export const Botao = ({texto}) => {
  return (
     <div>
       <button className={Styles.btn}>{texto}</button>
     </div>
  )
}

