import React from "react";

/**
 * O react lida com eventos de maneira muito simples
 * poorem seguindo os padroes da W3C, utilizando o proprio scheema
 * do react com um tipo especifico dele Class, e o nativo com event
 *
 * objetos pendurados em window, a melhor maneira
 * de lidr com eles é atraves de hooks.
 */

function Aula0209() {
  function handleClick(event) {
    console.log(event.target);
  }

  return (
    <div>
      <button onClick={handleClick}>Clique</button>
    </div>
  );
}

export default Aula0209;
