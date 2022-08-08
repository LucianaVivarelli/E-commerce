import React, { useState, useEffect } from "react";
import { Divisor } from "../Divisor/Divisor";
import styles from "./CantaoApi.module.css";
import { Lista } from "./Lista";
import { produtos } from "../../../produtos";


export const CantaoApi = () => {
  const [cantaoApi, setCantaoApi] = useState(produtos);
 

  return (
    <main className={styles.containerCantaoApi}>
      <section id="produtosLista" className={styles.secaoPdts}>

        <Divisor texto={"Coleção"} />
        <ul className={styles.containerPdtos}>
          <Lista CantaoApi={cantaoApi} />
        </ul>
        <section className={styles.ContainerBottom}>
        <Divisor texto={"Venha conferir nossas novidades"} />
          <p className={styles.pBottom}>Se cadastrando hoje, você ganha 15% de desconto com o cupom:<span>BEAUTY</span></p>
        </section>
      </section>
     
    </main>
  );
};
