import React from "react";

const Titulo = ({ texto, color, children }) => {
  return <h1 style={{ color: color ? color : "red" }}>{children}</h1>;
};

const Input = ({ name, id, ...props }) => {
  return (
    <div style={{ margin: "1rem 0" }}>
      <label htmlFor={id}>{name}</label>
      <input type="text" id={id} {...props} />
    </div>
  );
};

function Aula0211() {
  return (
    <div>
      <Titulo texto="Meu titulo" color="blue" />
      <Input name="Email" id="email" type="email" required />
      <Input
        name="Password"
        id="password"
        type="password"
        required
        placeholder="Init password"
      />

      <button>Enviar</button>
    </div>
  );
}

export default Aula0211;
