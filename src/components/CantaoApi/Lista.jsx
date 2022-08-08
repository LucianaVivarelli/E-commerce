import React from "react";
import styles from "./CantaoApi.module.css";

export const Lista = ({ CantaoApi }) => {
  return (
    <div className={styles.containerPdts}>
      {CantaoApi.map((cantaoApi, index) => {
        /* console.log(cantaoApi); */
        return (
          <div key={index}>
            <div className={styles.pdtsUl}>
              <li>
                <img
                  className={styles.image}
                  src={cantaoApi.items[0].images[0].imageUrl}
                  alt="cantaoApi"
                />
              </li>
              <li>
                {" "}
                <h4 className={styles.titleCard}>{cantaoApi.productName}</h4>
              </li>
              <li>
                {" "}
                <p className={styles.paragrafer}>
                  R$: {cantaoApi.items[0].sellers[0].commertialOffer.Price}
                </p>
              </li>
            </div>
          </div>
        );
      })}
    </div>
  );
};
