import React from "react";
import "./CssImport.css";

function CssImport() {
  return (
    <div>
      <h1 className="titulo">CSS import</h1>
      <p className="descricao">
        Existem diversas maneiras de usar css dentro do React, a mais comum e a
        padrão usando css normal, atravez do webpack.
      </p>
      <p className="descricao">
        Independente do css mesmo nao sendo usado, ele vai gerar no final o
        build, portando temos que usar somente oque importar
      </p>
      <p className="descricao atencao">
        O mais comum encontrarmos conflitos entre o css normal, portanto, o
        padrao ainda persiste aqui.
      </p>
    </div>
  );
}

export default CssImport;
