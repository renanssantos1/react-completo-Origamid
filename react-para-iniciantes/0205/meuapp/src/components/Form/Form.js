import React from "react";
import Input from "./Input";
import Select from "./Select";
import Radio from "./Radio";
import Checkbox from "./Checkbox";

const Descricao = () => {
  return (
    <>
      <h1 className="titulo">Componentes Input</h1>
      <p>
        Componentes puros, seus estados sao passados pelo lado de fora, pois
        dentro do componnete eu nao terei acesso a ele
      </p>
      <h2 className="marcacao">Obeservação</h2>
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
  const [fruta, setFruta] = React.useState("");
  const [linguagens, setLinguagens] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <div>
      <Descricao />
      <form>
        <h2>Checkbox - linguagens</h2>
        <Checkbox
          options={["Javascript", "Php", "Ruby"]}
          value={linguagens}
          setValue={setLinguagens}
        />

        <h2>Checkbox - termos</h2>
        <Checkbox
          options={["Li e eaceito os termos."]}
          value={termos}
          setValue={setTermos}
        />

        <h2 className="subtitulo">Cores</h2>
        <Radio options={["Azul", "Vermelho"]} value={cor} setValue={setCor} />
        <h2 className="subtitulo">Frutas</h2>
        <Radio
          options={["Laranja", "Uva", "Limão"]}
          value={fruta}
          setValue={setFruta}
        />

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

        {/* {termos.length > 0 ? <button>Enviar</button> : ""} */}
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Form;
