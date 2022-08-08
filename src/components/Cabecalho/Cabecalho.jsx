import React from "react";
import styles from "./Cabecalho.module.css";
import { Link } from "react-router-dom"

export const Cabecalho = () => {
  return (
    <div className={styles.container}>
      <header className={styles.Cabecalho}>
        {/*Seção de informações da loja. Como: Meios de pagamento e frete*/}
        <section>
          <ul className={styles.list}>
            <li>Carrinho</li>
            <li>Em até 5x sem juros</li>
            <li>
              frete grátis acima de 300 reais em compras
            </li>
            <li>
              15% off na primeira compra com o cupom: BEAUTY
            </li>
          </ul>
        </section>
        {/*Seção de Imagem header com butão de linkagem para a mesma página em coleções*/}
        <nav className={styles.navBar}>
          <ul className={styles.listaContainer}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Colection">Coleção</Link></li>

          </ul>
        </nav>
        {/*  fazer um código com as letras escrevendo a seguinte frase " frete grátis para todo o Brasil em compras de a partir R$:300,00" */}
      </header>
    </div>
  );
};
