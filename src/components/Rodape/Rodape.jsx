import React from "react";
import Styles from "./Rodape.module.css";
import { TbBrandLinkedin } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
export const Rodape = () => {
  return (
    <footer className={Styles.containerFooter}>
      <div className={Styles.colsFooter}>
        {/* Coluna footer "Col01" (Redes Sociais da empresa) */}
        <div className={Styles.col01}>
          <h3 className={Styles.colTitle}>Nossas Redes:</h3>
         <div className="icons"> <FiGithub className={Styles.icon} />
          <TbBrandLinkedin className={Styles.icon} />
          </div>
        </div>
        {/* Coluna footer "Col02" (informações do site/Empresa)  */}
        <div className={Styles.col02}>
          <h3 className={Styles.colTitle}>Sobre:</h3>
          <p className={Styles.colP}>Contato</p>
          <p className={Styles.colP}>Lojas fisicas</p>
        {/*  Coluna footer "Col03" (Coluna de ofertas da Marca)  */}
        </div>
        <div className={Styles.col03}>
          <h3 className={Styles.colTitle}>Ofertas:</h3>
          <p className={Styles.colP}>Bazar</p>
          <p className={Styles.colP}>Liquidação de inverno</p>
        </div>
      </div>
    </footer>
  );
};
