import React from "react";
import { Divisor } from "../Divisor/Divisor";
import midle01 from "../../assets/images/main/midle01.png";
import midle02 from "../../assets/images/main/midle02.png";
import midle03 from "../../assets/images/main/midle03.png";
import midle04 from "../../assets/images/main/midle04.png";
import Styles from "./Destaques.module.css";

export const Destaques = () => {
  return (
    <>
      <Divisor texto={"Destaques"} />

      <div clasName={Styles.containerImg}>
        <div className={Styles.iList01}>
          <img src={midle01} alt="Sobre a Marca" />

          <img src={midle02} alt="Promoções" />
        </div>
        <div className={Styles.iList02}>
          <img src={midle03} alt="Bazar" />

          <img src={midle04} alt="Loja" />
        </div>
      </div>
    </>
  );
};
