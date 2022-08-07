import React from "react";
import Styles from "./CantaoApi.module.css";


export const Lista = ({ CantaoApi }) => {
  return (
    <div className={Styles.containerPdts}>
      
      {CantaoApi.map((cantaoApi, index) => {
        /* console.log(cantaoApi); */
        return (
          
          <div className={Styles.listaPdts} key={index}>
            <div className={Styles.pdtsUl}>
              <li><img
                className={Styles.image}
                src={cantaoApi.items[0].images[0].imageUrl}
                alt="cantaoApi"
              />
              </li>
              <li> <h3>{cantaoApi.productName}</h3></li>
              <li> <p className={Styles.paragrafer}>R$: {cantaoApi.items[0].sellers[0].commertialOffer.Price}</p></li>
            </div>
            
          </div>
        );
      })}
    </div>
  );
};
