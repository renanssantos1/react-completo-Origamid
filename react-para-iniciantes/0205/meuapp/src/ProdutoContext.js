import React from "react";

export const ProdutoContext = React.createContext();

export const ProdutoProvider = ({ children }) => {
  const [produto, setProduto] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);

  React.useEffect(() => {
    setCarregando(!carregando);
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((resp) => resp.json())
      .then((json) => setProduto(json));

    setCarregando(false);
  }, [carregando]);

  function removerProduto() {
    setProduto((p) => (p = null));
  }

  return (
    <ProdutoContext.Provider value={{ produto, removerProduto, carregando }}>
      {children}
    </ProdutoContext.Provider>
  );
};
