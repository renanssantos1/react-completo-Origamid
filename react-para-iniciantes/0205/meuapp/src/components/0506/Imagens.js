import React from "react";
import DogSvg from "./DogSvg";

function Imagens() {
  return (
    <div>
      <h1>Trabalhando com imagens </h1>
      <p>
        No react temos que usar as imagens a partir do webpack com a sintaxe de{" "}
        <pre>import imagem from 'caminho/da/minhaImagem.extencao'</pre>o mesmo
        garante que na hora do build final nao quebre os import de nada na
        aplicacao.
      </p>
      <h2>SVG</h2>
      <p>
        Tambem podemos usar, svg direto dentro do react, pois temos mais
        controle ainda da nossa aplicação. Dessa maneira temos seus valores
        passados como <strong>Dinamicos</strong>
      </p>
      <DogSvg color="#84f" />
    </div>
  );
}

export default Imagens;
