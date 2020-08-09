import React from "react";
const Title = ({ title, type }) => {
  if (type) {
    return <h2 style={{ color: "blue" }}>{title}</h2>;
  }
  return <h1 style={{ color: "green" }}>{title}</h1>;
};

function Regras() {
  return (
    <div>
      <Title title="Regras" />
      <p>
        Existem algumas regras especificas dos hooks, se nao ele retorna null
        pra gente.
      </p>
      <Title type title="Top Level" />
      <p>
        A primeira é que sempre tem que estar no nivel topo do meu componente
      </p>
      <p>
        Utilzar somente em componetes e custom hooks, com o padrao{" "}
        <mark>use</mark>
      </p>
    </div>
  );
}

export default Regras;
