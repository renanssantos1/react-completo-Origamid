import React from "react";
import Produto from "./Produto";

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const Button = ({ title, onClick }) => {
  return (
    <button onClick={onClick} style={{ margin: ".5rem" }}>
      {title}
    </button>
  );
};

function UseEffect02() {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem("produto", produto);
  }, [produto]);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <p>
        Exercicio <mark>useEffect</mark>
      </p>
      <h1>Preferência : {produto && produto}</h1>
      <Button title="notebook" onClick={handleClick} />
      <Button title="smartphone" onClick={handleClick} />

      {produto && <Produto produto={produto} />}
    </div>
  );
}

export default UseEffect02;
