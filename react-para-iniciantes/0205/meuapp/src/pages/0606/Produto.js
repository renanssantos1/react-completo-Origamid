import React from "react";
import styles from "./Produto.module.css";
import { useParams } from "react-router-dom";
import Head from "./Head";

function Produto() {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState(null);

  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const responseJson = await response.json();

        setProduto(responseJson);
        setLoading(false);
      } catch (error) {
        setErro("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }

    fetchProduto("https://ranekapi.origamid.dev/json/api/produto/" + id);
  }, [id]);

  if (loading) return <div>carregando...</div>;
  if (erro) return <p>{erro}</p>;
  if (produto === null) return null;
  return (
    <section className={styles.produto + " animeLeft"}>
      <Head title={` ${produto.nome}`} content={` ${produto.descricao}`} />

      {produto.fotos.map((foto) => (
        <img key={foto.src} src={foto.src} alt={foto.titulo} />
      ))}
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
}

export default Produto;
