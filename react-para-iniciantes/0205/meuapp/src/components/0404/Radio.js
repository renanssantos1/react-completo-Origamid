import React from "react";

function Radio() {
  const [produto, setProduto] = React.useState("");

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <div>
      <h1 className="titulo">
        Form - <span className="subtitulo">Radio</span>
      </h1>
      <p>
        O radio tem uma peculiridade, pois seu valor que tem que ser reativo pra
        gente é seu atributo <span className="marcacao">checked</span>
        pois a mesma que guarda seus valores ou não.
      </p>
      <p>
        Seu valor tem que ser igual a o do value logo
        <code className="marcacao"> checkded === 'valorDoMeuValue'</code>
        tambem podemos usar o atributo name que nao precisamos fazer a
        verificação igual a do exemplo
      </p>

      <form>
        <label>
          <input
            type="radio"
            name="produto"
            value="smartphone"
            onChange={handleChange}
          />
          Smartphone
        </label>

        <label>
          <input
            onChange={handleChange}
            type="radio"
            name="produto"
            value="notebook"
          />
          Notebook
        </label>
        {produto}
      </form>
    </div>
  );
}

export default Radio;
