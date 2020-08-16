import React from "react";
import Input from "./Input";
import Select from "./Select";
import Radio from "./Radio";

const Descricao = () => {
  return (
    <>
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
    </>
  );
};

function Form() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");

  return (
    <div>
      <Descricao />
      <form>
        <Radio options={["Azul", "Vermelho"]} value={cor} setValue={setCor} />

        <Select
          options={["Smartphone", "Tablet"]}
          value={produto}
          setValue={setProduto}
        />

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
