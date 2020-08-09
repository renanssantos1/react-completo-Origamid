import React from "react";
import useFetch from "./useFetch";

const Title = ({ title, type }) => {
  if (type) {
    return <h2 style={{ color: "blue" }}>{title}</h2>;
  }
  return <h1 style={{ color: "green" }}>{title}</h1>;
};

function CustomHooks01() {
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const objeto = await request(
        "https://ranekapi.origamid.dev/json/api/produto/",
      );
      console.log(objeto);
    }

    fetchData();
  }, [request]);
  if (error) return <p>{error}</p>;
  if (loading) return <Title type title="Aguarde....." />;
  if (data)
    return (
      <div>
        <Title title="Custom Hooks 2" />
        {data.map((produto) => (
          <div key={produto.id}>
            <h2>{produto.nome}</h2>
          </div>
        ))}
      </div>
    );
  else return null;
}

export default CustomHooks01;
