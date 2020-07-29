import React from "react";

const ButtonModal = ({ setModal }) => {
  return <button onClick={() => setModal(true)}>Abrir modal</button>;
};

const Modal = ({ modal, setModal }) => {
  if (modal) {
    return (
      <section>
        Esse é um modal
        <button onClick={() => setModal(false)}>Fechar modal</button>
      </section>
    );
  }
  return null;
};

function useState1() {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
}

export default useState1;
