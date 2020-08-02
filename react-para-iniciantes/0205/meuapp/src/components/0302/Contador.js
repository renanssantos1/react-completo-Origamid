import React from "react";

function Contador() {
  const [contar, setContar] = React.useState(0);
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    function fetchProdutos() {
      fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
        .then((resp) => resp.json())
        .then((data) => setProduto(data));
    }
    fetchProdutos();
  }, []);
  return (
    <div>
      <p>Use effect</p>
      {produto && (
        <section>
          <h1>{produto.nome}</h1>
          <p>{produto.preco * contar}</p>
        </section>
      )}
      <button onClick={() => setContar(contar + 1)}> {contar}</button>
    </div>
  );
}

export default Contador;
