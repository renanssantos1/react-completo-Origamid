import React from "react";

function Input01() {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
  });

  function handleClick(event) {
    event.preventDefault();
    console.log(form);
  }

  function handleChange({ target }) {
    const { id, value } = target;

    setForm({ ...form, [id]: value });
  }

  return (
    <div>
      <h1 className="titulo">Formularios - Inputs </h1>
      <p>
        Para criarmos o formulario de tipo input, o estado tem que ser atribuido
        ao campo de value, e sua funcao atualizadora em em{" "}
        <span className="marcacao">onChange</span>
      </p>

      <h2 className="subtitulo">Multitplos campos</h2>
      <p>
        E como seria para usar o form para diversos campos, a primeira seria
        criar um field para cada input e a{" "}
        <span className="marcacao">segunda mais interessante </span>
        seria criar um <code>object</code> para receber todas os valores do form
      </p>

      <form onSubmit={handleClick}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Input01;
