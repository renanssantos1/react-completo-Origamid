import React from "react";
import Header from "./Header";

function Memo0703() {
  const [contar, setContar] = React.useState(0);

  return (
    <div className="main-container">
      <Header />
      <h1 className="titulo">Memo</h1>
      <p>
        Memo retorna um componente pra gente, o mesmo nao atualiza, mesmo que
        seu componente pai seja <strong className="marcacao">atualizado</strong>
        . O mesmo é usado em componente estatico, que nao mude nunca, seja algo
        fixo.
      </p>
      <p>
        Toda vez que o pai atualizar o estado, todos os filhos sao reatualizados
        novamente, e se termos um componente pesado isso pode ocasionar perda de
        performace.
      </p>
      <strong>
        Sintaxe: <pre>React.memo(Header)</pre>
      </strong>

      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
}

export default Memo0703;
