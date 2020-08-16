import React from "react";
import Input from "./Input";

function Form() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <div>
      <h1 className="titulo">Componentes Input</h1>
      <p>
        Componentes puros, seus estados sao passados pelo lado de fora, pois
        dentro do componnete eu nao terei acesso a ele
      </p>
      <h2 className="subtitulo">Obeservação</h2>
      <p>
        O restante dos astributos alem do value, id, label, e a funcao
        manipuladora do estado, sao passados atravez do{" "}
        <span className="marcacao">..props</span>
      </p>
      <form>
        <Input label="Nome" id="nome" value={nome} setValue={setNome} />
        <Input
          label="Email"
          id="email"
          value={email}
          required
          setValue={setEmail}
        />

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Form;
