import React from "react";
import styles from "./CssModules.module.css";

function CssModules() {
  console.log(styles);
  return (
    <div>
      <h1 className={styles.titulo}>CSS - MODULES</h1>
      <p>
        ja vem pre instalado e configurado, funciona da seguinte maneira ao
        invez de importar o css direto, importamos o mesmo como um{" "}
        <mark>objeto</mark>, e o mesmo vai conter todas as classes que a gente
        precisa.
      </p>
      <button className={styles.button}>Comprar</button>
      <p>
        <strong>[NOME_COMPONENT].[MODULE].CSS</strong>
        Ele injeta as classes com uma hash bem unica, praticamente impossivel
        ter variavel trocada, e sobrescrita. Tambem temos que usar sempre no
        padrao <strong>camelCase</strong>
      </p>
    </div>
  );
}

export default CssModules;
