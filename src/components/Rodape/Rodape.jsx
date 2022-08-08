import React from "react";
import styles from "./Rodape.module.css";
import { TbBrandLinkedin } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
export const Rodape = () => {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.colsFooter}>
        {/* Coluna footer "Col01" (Redes Sociais da empresa) */}
        <div className={styles.col01}>
          <h3 className={styles.colTitle}>Nossas Redes:</h3>
          <div className="icons">
            {" "}
            <FiGithub className={styles.icon} />
            <TbBrandLinkedin className={styles.icon} />
          </div>
        </div>
        {/* Coluna footer "Col02" (informações do site/Empresa)  */}
        <div className={styles.col02}>
          <h3 className={styles.colTitle}>Sobre:</h3>
          <p className={styles.colP}>Contato</p>
          <p className={styles.colP}>Lojas fisicas</p>
          {/*  Coluna footer "Col03" (Coluna de ofertas da Marca)  */}
        </div>
        <div className={styles.col03}>
          <h3 className={styles.colTitle}>Ofertas:</h3>
          <p className={styles.colP}>Bazar</p>
          <p className={styles.colP}>Liquidação de inverno</p>
        </div>
      </div>
    </footer>
  );
};
