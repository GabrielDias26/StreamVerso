import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [tipoUsuario, setTipoUsuario] = useState("aluno");

  return (
    <div className="login-container">
      <main className="login-main">
        <h2>Bem-vindo(a) ao StreamVerso</h2>

        <form className="login-form">
          <input type="text" placeholder="E-mail" />
          <div className="password-field">
            <input type="password" placeholder="Senha" />
          </div>
          <a href="#" className="forgot-link">
            ESQUECEU SUA SENHA?
          </a>
          <button type="submit">LOGIN</button>
          <p className="register">
            Se não possuir um usuário, <a href="#">cadastre-se</a>
          </p>
        </form>
      </main>
    </div>
  );
}

export default Login;
