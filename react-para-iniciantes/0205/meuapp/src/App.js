import React from "react";
import UseContext02 from "./components/0305/UseContext02";
import { ProdutoProvider } from "./ProdutoContext";

const App = () => {
  return (
    <ProdutoProvider>
      <UseContext02 />
    </ProdutoProvider>
  );
};
export default App;
