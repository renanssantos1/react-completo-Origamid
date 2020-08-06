import React from "react";
import { GlobalContext } from "../../GlobalContext";

function UseContext01() {
  const dados = React.useContext(GlobalContext);

  return (
    <div>
      <h1>useContext</h1>
      <p>Usado para persistir um estado por toda minha aplicação</p>

      <mark>createContext</mark>
      <p>
        Por exemplo eu quero persistir os dados do usuario de forma global, e
        podemos acessar o mesmo em qualquer lugar no momento que eu quiser
      </p>

      <button onClick={() => dados.setContar((contar) => contar + 1)}>
        {dados.contar}
      </button>
    </div>
  );
}

export default UseContext01;
