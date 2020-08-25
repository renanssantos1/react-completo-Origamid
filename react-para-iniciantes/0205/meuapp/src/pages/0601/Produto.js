import React from "react";
import { useParams, useLocation } from "react-router-dom";

function Produto() {
  const params = useParams();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  console.log(search.get("memoria"));

  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  );
}

export default Produto;
