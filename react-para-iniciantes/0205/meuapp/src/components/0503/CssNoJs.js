import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Titulo = styled.h1`
  color: #43c;
  font-size: 2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const DescricaoContainer = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

const Descricao = styled.div`
  flex: 1;
  padding: 10px;
  margin: 0 10px;
  background: hsl(${Math.random() * 360}, 100%, 40%);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #fff;
  @media (max-width: 700px) {
    flex: 0 0 100%;
  }
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: 0.1s;
  background: ${({ cor }) => (cor ? cor : "#43c")};
  color: #fff;
  padding: 0.8rem 1.6rem;
  margin-right: 1rem;
  font-size: 1.2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

function CssNoJs() {
  return (
    <Container>
      <Titulo>CSS no JS </Titulo>
      <DescricaoContainer>
        <Descricao>
          <p>
            Aqui nessa fase do js, a ideia é que o conceito de classes meio que
            morre aqui. Ao invez de eu criar um css de titulo por exemplo eu
            crio um componente <strong>Titulo</strong>.
          </p>
        </Descricao>
        <Descricao>
          <p>
            O interessante daqui, é que nao temos conflitos, e tambem escrevemos
            nosso css de uma forma mais descritivo, e fica muito mais facil de
            entender
          </p>
        </Descricao>

        <Descricao>
          <p>
            Como passar props para dentro da classe, temos que passar em formato
            de callback
          </p>

          <Button>Enviar</Button>
          <Button cor="#84f">Enviar</Button>
        </Descricao>
      </DescricaoContainer>
    </Container>
  );
}

export default CssNoJs;
