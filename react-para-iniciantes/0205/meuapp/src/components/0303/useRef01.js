import React from "react";

const Title = ({ title, color }) => {
  return (
    <h2 style={{ color: color ? color : "green", display: "inline-block" }}>
      {title}
    </h2>
  );
};

function useRef01() {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef();

  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);

  const timeoutRef = React.useRef();

  function handleAddCarrinho() {
    setCarrinho(carrinho + 1);
    setNotificacao("Item adicionado ao carrinho");

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput(() => "");
    inputRef.current.focus();
  }

  return (
    <div>
      <Title title="UseRef" />
      <p>
        usado para se referir a um elemento do dom podendo assim manipuar o
        mesmo durante todo o seu ciclo de vida, eu so vou ter acesso ao seu
        valor, somente apos o primeiro render do componente, ou seja, no{" "}
        <mark>useEffect</mark>. É importante usar o mesmo como um current pois
        podemos tornar seu valor mutavel <code>video.current = 'Teste'</code>
      </p>
      <ul>
        {comentarios.map((comentario) => (
          <li key={String(comentario)}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        ref={inputRef}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Enviar</button>
      <br />
      <Title title="Referencia" color="blue" />
      <p>
        Seu valor pode ser usado para qualquer elemento no dom no exemplo do
        timeout ele buga se nao usar o ref pois o mesmo renderiza todo o
        componente novamente e acaba perdendo seu valor.
      </p>

      {notificacao && (
        <div
          style={{
            border: "3px solid green",
            padding: "10px",
            marginBottom: ".9rem",
          }}
        >
          <p>{notificacao}</p>
        </div>
      )}
      <button onClick={handleAddCarrinho}>Adicionar carrinho {carrinho}</button>
    </div>
  );
}

export default useRef01;
