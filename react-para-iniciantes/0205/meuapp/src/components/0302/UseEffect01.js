import React from "react";

const Produto = () => {
  React.useEffect(() => {
    function handleScroll(ev) {
      console.log(ev);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section style={{ height: "200vh" }}>
      <p>Meu produto</p>
    </section>
  );
};

function UseEffect01() {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  );
}

export default UseEffect01;
