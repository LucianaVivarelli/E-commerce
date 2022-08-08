import React from "react";
import { Cabecalho } from "../../components/Cabecalho/Cabecalho";
import { Colection } from "../Colection/Colection";
import { Rodape } from "../../components/Rodape/Rodape";
import { Destaques } from "../../components/Destaques/Destaques";
import { Link } from "react-router-dom";
import { Divisor } from "../../components/Divisor/Divisor";
import styles from './Home.module.css'

export const Home = () => {
  return (
    <div>
      <Cabecalho />
      <Destaques />
      <Colection />
      <Divisor texto={"Novidade"} />
      <div>
        <p className={styles.paragrafer} >Cadastre-se hoje no site e siga nossas Redes sociais para ganhar 15% de desconto na sua compra!</p>
      </div>
      <Rodape />
    </div>
  );
};
