import React from "react";

function Aula0208_2() {
  const produtos = [
    {
      id: 1,
      nome: "Smartphone",
      preco: "R$ 2000",
      cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
      id: 2,
      nome: "Notebook",
      preco: "R$ 3000",
      cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
      id: 3,
      nome: "Tablet",
      preco: "R$ 1500",
      cores: ["#365069", "#47c1c8", "#f95786"],
    },
  ];

  let produto = produtos
    .map(({ id, nome, preco, cores }) => {
      return {
        id,
        nome,
        cores,
        preco: Number(preco.replace("R$ ", "")),
      };
    })
    .filter((p) => p.preco > 1500);
  return (
    <section>
      <h1>Lista de produtos</h1>
      <ul>
        {produto.map((p) => {
          return (
            <li key={p.id}>
              <strong>{p.nome}</strong>
              <p>Preco: R$ {p.preco}</p>
              <ul>
                {p.cores.map((cor) => {
                  return (
                    <li key={cor} style={{ backgroundColor: cor }}>
                      {cor}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Aula0208_2;
