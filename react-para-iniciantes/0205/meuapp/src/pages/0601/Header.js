import React from "react";

import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  React.useEffect(() => {
    console.log("Mudou de rota");
  }, [location]);

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
