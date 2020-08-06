import React from "react";
import { ProdutoContext } from "../../ProdutoContext";

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

function UseContext02() {
  const dados = React.useContext(ProdutoContext);

  return (
    <div>
      <h2>Exericicios</h2>
      {dados.carregando && <p>Carregando...</p>}

      {!dados.carregando &&
        dados.produto &&
        dados.produto.map((p) => {
          return <li key={p.id}>{p.nome}</li>;
        })}

      <button onClick={() => dados.removerProduto()}>Limpar</button>
    </div>
  );
}

export default UseContext02;
