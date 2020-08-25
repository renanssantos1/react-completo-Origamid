import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleClick() {
    console.log("fazer login");
    setTimeout(() => {
      navigate("/sobre");
    }, 2000);
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default Login;
