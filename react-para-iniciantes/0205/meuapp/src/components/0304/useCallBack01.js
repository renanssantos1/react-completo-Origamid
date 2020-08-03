import React from "react";

function useCallBack01() {
  const [contar, setContar] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setContar((oldValue) => oldValue + 1);
  }, []);

  return (
    <div>
      <h1>useCallback</h1>
      <p>
        usado para pegar um valor dse uma funcao e disparar a mesma somente uma
        vez,
        <mark>
          diferente do funcion que executa toda as vezes que nosso app é
          atualizado.
        </mark>
      </p>
      <p>
        É bem dificil notar a diferencia entre o padrao ja fornecido e o do
        callback, pois e muito rapido seu render
      </p>

      <button onClick={handleClick}>Adicionar {contar}</button>
    </div>
  );
}

export default useCallBack01;
