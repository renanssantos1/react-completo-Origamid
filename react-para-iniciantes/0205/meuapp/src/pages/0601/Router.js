import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";

import Home from "./Home";
import Login from "./Login";
import Sobre from "./Sobre";
import NaoEncontrada from "./NaoEncontrada";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />

        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
