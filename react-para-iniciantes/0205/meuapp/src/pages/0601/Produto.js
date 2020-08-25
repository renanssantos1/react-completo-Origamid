import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Produto() {
  return (
    <div>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Produto;
