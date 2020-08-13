import React from "react";

function TextArea() {
  const [textarea, setTextArea] = React.useState("");
  return (
    <div>
      <h1>Form - Text area</h1>
      <p>
        O textarea,manipular seus valores, e a mesma coisa que usar o input, a
        diferença esta, que por padrao do html o textarea precisa de fechamento,
        e no react isso <mark>nao e necessario</mark>.
      </p>
      <form>
        <textarea
          value={textarea}
          rows="4"
          onChange={({ target }) => setTextArea(target.value)}
        />
        {textarea}
      </form>
    </div>
  );
}

export default TextArea;
