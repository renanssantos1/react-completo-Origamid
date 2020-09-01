import React from "react";

function reducer(state = [], action) {
  switch (action.type) {
    case "remover":
      return state.filter((item) => item !== action.content);

    case "adicionar":
      return [...state, action.content];

    default:
      throw new Error();
  }
}

function Exemplo() {
  const [state, dispatch] = React.useReducer(reducer, ["Banana", "Uva"]);

  return (
    <div style={{ marginTop: "2rem" }}>
      <button onClick={() => dispatch({ type: "remover", content: "Banana" })}>
        Remover Banana
      </button>

      <button onClick={() => dispatch({ type: "adicionar", content: "Limao" })}>
        Adicionar Limão
      </button>

      {state}
    </div>
  );
}

export default Exemplo;
