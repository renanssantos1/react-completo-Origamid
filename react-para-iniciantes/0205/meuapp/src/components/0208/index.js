import React from "react";
/**
 * Percorrer arrays dentro do react
 * é bem interessante passar a opção @key
 * pois o mesmo usa dessa prop para
 * atualizar somente a nova posicação e o item,
 * sem criar o array novamente.
 *
 * Tambem posso destruturar o array
 * durante a iteração
 */

function Aula0208() {
  // const filmes = ["Before Sunrise", "Before Sunset", "Before Midnight"];

  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Swords", ano: 2000 },
  ];

  return (
    <ul>
      {livros
        .filter(({ ano }) => ano > 1997)
        .map(({ nome, ano }) => (
          <li key={nome}>
            Livro: {nome}, ano: {ano}{" "}
          </li>
        ))}
    </ul>
  );
}

export default Aula0208;
