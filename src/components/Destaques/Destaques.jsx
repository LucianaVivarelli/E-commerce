import React from "react";
import { Divisor } from "../Divisor/Divisor";
import { Link } from "react-router-dom";
import midle01 from "../../assets/images/main/midle01.png";
import midle02 from "../../assets/images/main/midle02.png";
import midle03 from "../../assets/images/main/midle03.png";
import midle04 from "../../assets/images/main/midle04.png";
import styles from "./Destaques.module.css";

export const Destaques = () => {
  return (
    <div>
      <Divisor texto={"Destaques"} />

      <div>
        <div className={styles.iList01}>

          <Link to="/Colection">
            <img className={styles.midle01} src={midle01} alt="Coleção" />
          </Link>

          <Link to="/Bazar">
            {" "}
            <img className={styles.midle02} src={midle02} alt="Bazar" />
          </Link>

        </div>

        <div className={styles.iList02}>

          <Link to="/Stores">
            <img className={styles.midle03} src={midle03} alt="Lojas" />
          </Link>

          <Link to="/Off">
            {" "}
            <img className={styles.midle04} src={midle04} alt="Peças Off" />
          </Link>
          
        </div>
      </div>
    </div>
  );
};
