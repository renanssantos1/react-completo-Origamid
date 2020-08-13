import React from "react";

function Select() {
  const [select, setSelect] = React.useState("");
  return (
    <div>
      <h1>Form - Select</h1>
      <p>O value de select sao definidos no select em si</p>
      <p>
        Para mudar o valor inicial, temos que passar uma propriedade option como{" "}
        <mark>disabled</mark>, e seu value estando vazio
        <code>
          <option value="" disabled>
            Selecione um produto
          </option>
        </code>
      </p>

      <form>
        <select
          name="produtos"
          id="produtos"
          value={select}
          onChange={({ target }) => setSelect(target.value)}
        >
          <option value="" disabled>
            Selecione um produto
          </option>
          <option value="notebook">Notebook</option>
          <option value="smartphone">Smartphone</option>
          <option value="tablet">Tablet</option>
        </select>
        <p>
          Produto selecionado: {select ? select : "Nenhum produto selecionado"}
        </p>
      </form>
    </div>
  );
}

export default Select;
