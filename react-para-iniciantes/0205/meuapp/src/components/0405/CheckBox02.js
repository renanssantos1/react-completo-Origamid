import React from "react";

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

function CheckBox02() {
  const [cores, setCores] = React.useState([]);

  function handleCheckChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function checkColor(color) {
    return cores.includes(color);
  }

  return (
    <div>
      <h1 className="titulo">Form - Checkbox 02 - exericio</h1>
      <h2 className="subtitulo">Escolha sua cor favorita</h2>
      <form>
        {coresArray.map((cor) => (
          <label key={cor}>
            <input
              type="checkbox"
              value={cor}
              checked={checkColor(cor)}
              onChange={handleCheckChange}
            />
            {String(cor).toUpperCase()}
          </label>
        ))}
      </form>
    </div>
  );
}

export default CheckBox02;
