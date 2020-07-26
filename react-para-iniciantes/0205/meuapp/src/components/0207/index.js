import React from "react";
// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

export default function Aula_0207() {
  const luana = {
    cliente: "Luana",
    idade: 27,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
    ],
    ativa: true,
  };

  const mario = {
    cliente: "Mario",
    idade: 31,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
      { nome: "Guitarra", preco: "R$ 3500" },
    ],
    ativa: false,
  };

  const dados = luana;

  const total = dados.compras
    .map((item) => +item.preco.replace("R$ ", ""))
    .reduce((arr, acc) => {
      return arr + acc;
    });

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? " Ativa" : " Inativo"}
        </span>
      </p>
      <span>Total: R$ {total}</span>
      {total > 10000 && (
        <p>
          <mark>Seu cliente gasta muito</mark>
        </p>
      )}
    </div>
  );
}
