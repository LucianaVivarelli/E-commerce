import React from "react";
import styles from "./Divisor.module.css";

export const Divisor = (props) => {
  return <h2 className={styles.Divisor}>{props.texto}</h2>;
};
