import React from "react";
import { Cabecalho } from "../../components/Cabecalho/Cabecalho";
import { Rodape } from "../../components/Rodape/Rodape";
import { Destaques } from "../../components/Destaques/Destaques";
import { Link } from "react-router-dom";
import { Divisor } from "../../components/Divisor/Divisor";
import styles from './Home.module.css'
import { CantaoApi } from "../../components/CantaoApi/CantaoApi";
import { useRef } from "react";
export const Home = () => {
  const ColecaoRef= useRef(null)
  function scrollToColecaoApi(){
    console.log(scrollToColecaoApi)
    ColecaoRef.current.scrollIntoView({
      behavior:"smooth"
    })
  }
  return (
    <div>
      
      <Cabecalho scrollToColecaoApi={scrollToColecaoApi} />
      <Destaques />
      <CantaoApi ColecaoRef={ColecaoRef} />
      <Divisor texto={"Novidade"} />
      <div>
        <p className={styles.paragrafer} >Cadastre-se hoje no site e siga nossas Redes sociais para ganhar 15% de desconto na sua compra!</p>
      </div>
      <Rodape />
    </div>
  );
};

