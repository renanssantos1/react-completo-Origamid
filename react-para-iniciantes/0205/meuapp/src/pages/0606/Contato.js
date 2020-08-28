import React from "react";
import styles from "./Contato.module.css";

import foto from "../../assets/img/contato.jpg";
import Head from "./Head";

function Contato() {
  return (
    <section className={`${styles.contato}  animeLeft`}>
      <Head title="Contato" content="Pagina de contato" />
      <img src={foto} alt="Maquina de escrever" />
      <div>
        <h2>Entre em contato</h2>
        <ul className={styles.dados}>
          <li>email@email.com</li>
          <li>98878999</li>
          <li>Rua ali perto, 999</li>
        </ul>
      </div>
    </section>
  );
}

export default Contato;
