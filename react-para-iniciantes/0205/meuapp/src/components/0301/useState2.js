import React from "react";
/**
 * Stric Mode
 * reduz o risco de voce escrever uma funcao
 * que por si só tem efeito colaterais nas demais
 * ou seja no exemplo do contador
 * ele afeta os items do array
 */

function useState2() {
  const [contar, setContar] = React.useState(1);
  const [items] = React.useState(["item 1"]);

  function handleClick() {
    setContar((contar) => {
      return contar + 1;
    });
  }

  return (
    <div>
      <p>
        <mark>Stric Mode </mark>
        reduz o risco de voce escrever uma funcao que por si só tem efeito
        colaterais nas demais ou seja no exemplo do contador ele afeta os items
        do array
      </p>
      <button onClick={handleClick}>{contar}</button>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
}

export default useState2;
