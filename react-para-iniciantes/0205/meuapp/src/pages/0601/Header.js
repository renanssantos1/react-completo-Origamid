import React from "react";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <NavLink end to="/" activeStyle={{ color: "tomato" }}>
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink to="sobre" activeStyle={{ color: "tomato" }}>
          Sobre
        </NavLink>{" "}
        |{" "}
        <NavLink to="login" activeStyle={{ color: "tomato" }}>
          Login
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
