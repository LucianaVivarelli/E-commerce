import React from "react";
import Styles from "./CantaoApi.module.css";
import { Botao } from "../Botao/Botao";

export const Lista = ({ CantaoApi }) => {
  return (
    <div className={Styles.containerPdts}>
      {CantaoApi.map((cantaoApi, index) => {
        console.log(cantaoApi);
        return (
          <li className={Styles.listaPdts} key={index}>
            <div className={Styles.pdtsUl}>
              <img
                className={Styles.image}
                src={cantaoApi.items[0].images[0].imageUrl}
                alt="cantaoApi"
              />
              <h3>{cantaoApi.productName}</h3>
              <p>R$: {cantaoApi.items[0].sellers[0].commertialOffer.Price}</p>
            </div>
          </li>
        );
      })}
    </div>
  );
};
