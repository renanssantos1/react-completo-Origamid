import React from "react";
import Exemplo from "./Exemplo";

function reducer(state, action) {
  switch (action) {
    case "aumentar":
      return state + 1;

    case "diminuir":
      if (state === 0) {
        return state;
      }
      return state - 1;

    default:
      throw new Error();
  }
}

function useReducer0704() {
  const [state, dispatch] = React.useReducer(reducer, 0);

  function Counter() {
    return (
      <p>
        <strong>{state}</strong>
      </p>
    );
  }

  return (
    <div>
      <h1 className="titulo">Gerenciamento de estado - UseReducer</h1>
      <p>
        Com o <span>useReducer</span>é possivel passar uma ação que vai ser
        responsavel por manipular todo nosso estado, como a gente quiser
      </p>
      <ol>
        <h2>Passos para criar o reducer</h2>
        <li>Criamos uma funcao redudora que recebe, uma action e um state</li>
        <li>
          Manipulamos o estado atravez do switch com o type dentro da action
        </li>
        <li>Retornamos o valor atualizado</li>
        <li>
          Usamos um hook chamado useReducer que recebe os valores de estado, e a
          funcao
        </li>
        <li>
          seu primeiro valor do array, e o estado, e o seu dispatch, que sera a
          ação feita pelo o usuario, como no exemplo o botão
        </li>
      </ol>
      <Counter />
      <button
        onClick={() => dispatch("aumentar")}
        style={{ marginRight: "2rem", color: "#fff" }}
      >
        +
      </button>
      <button
        onClick={() => dispatch("diminuir")}
        style={{ marginRight: "2rem", color: "#fff" }}
      >
        -
      </button>

      <Exemplo />
    </div>
  );
}

export default useReducer0704;
