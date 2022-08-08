import React, { useState, useEffect } from "react";
import { Divisor } from "../Divisor/Divisor";
import styles from "./CantaoApi.module.css";
import { Lista } from "./Lista";
import { produtos } from "../../../produtos";

export const CantaoApi = () => {
  const [cantaoApi, setCantaoApi] = useState(produtos);

  return (
    <main className={styles.containerCantaoApi}>
      <section id="produtosLista">
        <Divisor texto={"Coleção"} />
        <ul className={styles.containerPdts}>
          <Lista CantaoApi={cantaoApi} />
        </ul>
      </section>
    </main>
  );
};
