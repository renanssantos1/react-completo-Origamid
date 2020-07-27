import React from "react";

const Header = () => {
  return (
    <header>
      <div style={{ background: "#f5f5f5", padding: "20px" }}>
        <small>
          Replique a interface como a apresentada na aula Utilize a array abaixo
          para mostrar os produtos // Quebre em componentes o que precisar ser
          reutilizado
          <mark>
            Dica: const pathname = window.location; (puxa o caminho do URL)
          </mark>
        </small>
      </div>
      <p>Exercicio</p>
      <ul>
        <li>
          <a href="/" title="Ir para home">
            Home
          </a>
        </li>
        <li>
          <a href="/produtos" title="Ir para produtos">
            Produtos
          </a>
        </li>
      </ul>
    </header>
  );
};

const Titulo = ({ titulo, color }) => {
  return <h1 style={{ color: color }}>{titulo}</h1>;
};

const Home = () => {
  return (
    <section>
      <Titulo titulo="Home" color="green" />
      <p>Essa é home do site</p>
    </section>
  );
};

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <section>
      <Titulo titulo="Produtos" color="green" />
      <ul>
        {produtos.map((p) => {
          return (
            <li key={p.nome} style={{ border: "1px solid #5144" }}>
              <p>{p.nome}</p>
              <ul style={{ listStyle: "none" }}>
                {p.propriedades.map((item, index) => {
                  return <li key={String(index)}>{item}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function Aula0212() {
  const location = window.location;
  let Component = Home;
  if (location.pathname === "/produtos") {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <div>
      <Header />
      <Component />
    </div>
  );
}

export default Aula0212;
