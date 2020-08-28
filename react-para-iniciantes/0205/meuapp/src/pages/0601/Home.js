import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head";

function Home() {
  return (
    <div>
      <Head title="Origamid | Home" description="Curso de Oridamid" />
      <h1>Sobre</h1>
      <p>Essa e a home</p>
      <li>
        <Link to="produto/notebook">Notebook</Link>
      </li>
      <li>
        <Link to="produto/smartphone">Smartphone</Link>
      </li>
    </div>
  );
}

export default Home;
