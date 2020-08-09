import React from "react";
import useLocalStorage from "./useLocalStorage";

const Title = ({ title, type }) => {
  if (type) {
    return <h2 style={{ color: "blue" }}>{title}</h2>;
  }
  return <h1 style={{ color: "green" }}>{title}</h1>;
};

function CustomHooks01() {
  const [produto, setProduto] = useLocalStorage("produto", "");

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <Title title="Custom Hooks" />
      <p>
        Com os hooks é possivel criarmos os nossos proprios o mais puro o
        possivel e exportalos atravez de funcoes, e usar em qualquer lugar de
        nossa aplicação, é uma função que retorna uma função,
        <mark>os tipos não tem uma regra especifica pra isso.</mark>
      </p>
      <Title type title={produto} />
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
}

export default CustomHooks01;
