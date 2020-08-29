import React from "react";
import styles from "./Produto.module.css";
import { useParams } from "react-router-dom";

function Produto() {
  const params = useParams();
  console.log(params);

  return (
    <div className={styles.produto}>
      <h2>Pagina do produto</h2>
    </div>
  );
}

export default Produto;
