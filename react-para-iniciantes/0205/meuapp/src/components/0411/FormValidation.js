import React from "react";
import Input from "../0410/Input";
import useForm from "./useForm";

const Descricao = () => {
  return (
    <>
      <h1 className="subtitulo">
        <code>useForm</code>
      </h1>
      <p>
        A ideia geral aqui é criar uma validacao que sera usada a partir de um
        valor passado pra ela a mesma faça uma determinada validação.
      </p>
    </>
  );
};

function FormValidation() {
  const cep = useForm("cep");
  const email = useForm("email");
  const nome = useForm();
  const sobrenome = useForm(false);

  const validation = () => {
    return cep.validate() && nome.validate() && email.validate();
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    if (validation()) {
      console.log("enviar");
    }
  }

  return (
    <div>
      <Descricao />

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Nome"
          id="nome"
          placeholder="Nome"
          {...nome}
        />

        <Input type="text" label="Sobrenome" id="sobrenome" {...sobrenome} />

        <Input
          type="text"
          label="CEP"
          id="cep"
          placeholder="00000-000"
          maxLength="9"
          {...cep}
        />

        <Input type="email" label="Email" id="email" {...email} />

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default FormValidation;
