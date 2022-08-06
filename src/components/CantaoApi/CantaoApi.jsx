import React, { useState, useEffect } from "react";
import { Divisor } from "../Divisor/Divisor";
import styles from "./CantaoApi.module.css";
import { Lista } from "./Lista";
import { produtos } from "../../../produtos";
import { Botao } from "../Botao/Botao";

export const CantaoApi = () => {
  const [cantaoApi, setCantaoApi] = useState(produtos);
  const [contador, setContador] = useState(1);

  return (
    <main className={styles.containerCantaoApi}>
      <section id="produtosLista" className={styles.secaoPdts}>
        <Divisor texto={"Coleção"} />
        <ul className={styles.containerPdtos}>
          <Lista CantaoApi={cantaoApi} />
        </ul>
      </section>
      <section className={styles.BtnMaisProdutos}></section>
    </main>
  );
};
