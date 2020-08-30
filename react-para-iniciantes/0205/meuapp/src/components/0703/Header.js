import React from "react";

function Header() {
  console.log("[HEADER] Renderizou");
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}

export default React.memo(Header);
