import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";

import Home from "./Home";
import Login from "./Login";
import Sobre from "./Sobre";

import Produto from "./Produto";
import ProdutoDescricao from "./ProdutoDescricao";
import ProdutoAvaliacao from "./ProdutoAvaliacao";
import ProdutoCustomizado from "./ProdutoCustomizado";

import NaoEncontrada from "./NaoEncontrada";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />

        <Route path="produto/:id/*" element={<Produto />}>
          <Route path="/" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>

        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
