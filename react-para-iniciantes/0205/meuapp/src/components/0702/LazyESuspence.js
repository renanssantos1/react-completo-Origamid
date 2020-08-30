import React from "react";

function LazyESuspence() {
  return (
    <div className="main-container ">
      <h1 className="titulo">Lazy e suspence</h1>
      <p>
        Dividir o codigo em partes menores, só chama uma parte do mesmo quando
        for necessario
      </p>
      <p>
        Muito recomendado quando queremos usar certas bibliotecas em partes do
        nosso codigo, como por exemplo uma bilbioteca de video, ou graficos, que
        a mesma é muito grande.
      </p>
      <pre>npm install jquery</pre>
      <pre>const Contato = React.lazy(() {"->"}import item)</pre>
      <p>
        Temos que envolver nosso componente que sera importado, com o suspense
        do react e passar um <span className="marcacao">Fallback</span>, que
        pode ser uma div carregando.
      </p>
    </div>
  );
}

export default LazyESuspence;
