import React from "react";

function Produto({ produto }) {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    let url = `https://ranekapi.origamid.dev/json/api/produto/${produto}`;

    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setDados(json));
  }, [produto]);

  if (dados === null) return null;
  return (
    <section>
      <h1>{dados.nome}</h1>
      <h1>R$ {dados.preco}</h1>
    </section>
  );
}

export default Produto;
