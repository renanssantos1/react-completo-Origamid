import React from "react";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const Button = ({ title, onClick }) => {
  return (
    <button style={{ margin: ".5rem" }} onClick={onClick}>
      {title}
    </button>
  );
};

const Produto = ({ produto }) => {
  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>Preco: {produto.preco}</p>
      <img
        src={produto.fotos[0].src}
        alt={produto.fotos[0].titulo}
        titulo={produto.fotos[0].titulo}
      />
    </div>
  );
};

function useState3() {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);

  async function getDados({ target }) {
    setCarregando(true);
    const produto = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`,
    );

    const response = await produto.json();
    setTimeout(() => {
      setDados((oldDados) => response);
      setCarregando(false);
    }, 3000);
  }

  return (
    <div>
      <Button onClick={getDados} title="tablet" />
      <Button onClick={getDados} title="smartphone" />
      <Button onClick={getDados} title="notebook" />

      <p>{carregando && "Aguarde..."}</p>
      {!carregando && dados && <Produto produto={dados} />}
    </div>
  );
}

export default useState3;
