import React from "react";

const Title = ({ title, color }) => {
  return (
    <h2 style={{ color: color ? color : "green", display: "inline-block" }}>
      {title}
    </h2>
  );
};

function operacaoLenta() {
  let c;

  for (let i = 0; i < 10000; i++) {
    c = i + i / 10;
  }

  return c;
}

function useMemo01() {
  const [contar, setContar] = React.useState(0);

  const t1 = performance.now();
  const valor = operacaoLenta();
  console.log(performance.now() - t1);

  return (
    <div>
      <Title title="useMemo" />
      <br />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
}

export default useMemo01;
