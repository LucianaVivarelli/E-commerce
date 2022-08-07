import React from "react";
import Styles from "./Cabecalho.module.css";
import {Destaques} from "../Destaques/Destaques"

export const Cabecalho = () => {
  return (
    <div className="Container">
      <header className={Styles.Cabecalho}>
        {/*Seção de informações da loja. Como: Meios de pagamento e frete*/}
        <section className={Styles.descriptionPay}>
          <ul className={Styles.list}>
            <li className={Styles.listCart}>Carrinho</li>
            <li className={Styles.listPay}>Em até 5x sem juros</li>
            <li className={Styles.listFrete}>
              frete grátis acima de 300 reais em compras
            </li>
            <li className={Styles.listOffJam}>
              15% off na primeira compra com o cupom: BEAUTY
            </li>
          </ul>
        </section>
        {/*Seção de Imagem header com butão de linkagem para a mesma página em coleções*/}
        <nav className={Styles.navBar}>
          <div className={Styles.listaContainer}>
            <a className={Styles.login} href="">
              Login
            </a>
            <a className={Styles.contato} href="">
              Coleção
            </a>
          </div>
        </nav>
        {/*  fazer um código com as letras escrevendo a seguinte frase " frete grátis para todo o Brasil em compras de a partir R$:300,00" */}
      </header>
    </div>
  );
};
