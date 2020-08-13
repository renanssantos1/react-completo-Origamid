import React from "react";

function CheckBox01() {
  const [cores, setCores] = React.useState(["azul"]);

  function handleChange({ target }) {
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
      <h1 className="titulo">
        Form - <span className="subtitulo">Checkbox 1</span>
      </h1>
      <p>
        Como o anterior na explicacao do radio, seu atributo levado em conta é o{" "}
        <span className="marcacao">checked</span>
        se e true ou false
      </p>
      <p>
        Se eu ja tivesse um valor selecionado, o mesmo daria erro, pois o estado
        estaria alterado e seu valor estaria nao marcado na interface.
      </p>

      <form>
        <label>
          <input
            type="checkbox"
            value="azul"
            checked={checkColor("azul")}
            onChange={handleChange}
          />
          Azul
        </label>

        <label>
          <input
            type="checkbox"
            value="vermelho"
            checked={checkColor("vermelho")}
            onChange={handleChange}
          />
          Vermelho
        </label>
      </form>
    </div>
  );
}

export default CheckBox01;
