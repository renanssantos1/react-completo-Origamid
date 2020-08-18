import React from "react";
import Input from "./Input";

function Validacao() {
  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um cep valido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validateCep(cep)) {
      console.log("enviou");
    } else {
      console.log("nao enviar");
    }
  }

  return (
    <div>
      <h1 className="titulo">Validação em form</h1>
      <p>
        Validacao em formularios e interessante colocar no{" "}
        <span className="marcacao">onBlur</span>, tambem podemos colocar a
        validacao enquanto o usuario esta digitante e so mostra-lo e persistir
        em tela somente apos a primeira mensagem for exibida.
      </p>
      <p>
        Para chegar nesse resultado temos que criar o padrao onchange e chamar a
        funcao de validacao, porem somente se existir um error.
        <code className="subtitulo">if (error) validateCep(target.value)</code>
      </p>

      <ol>
        <p>Agora temos uma valicao de tres pontos</p>
        <li>Ao tirar o foco do field</li>
        <li>Enquanto o usuario esta digitando</li>
        <li>Antes de enviar o formulario</li>
      </ol>

      <form onSubmit={handleSubmit}>
        <Input
          value={cep}
          type="text"
          label="CEP"
          id="cep"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="00000-000"
          maxLength="9"
        />
        {error && <p className="error">{error}</p>}

        <button disabled={error}> Enviar</button>
      </form>
    </div>
  );
}

export default Validacao;
