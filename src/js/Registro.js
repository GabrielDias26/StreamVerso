import React, { useState } from "react";
import "./Registro.css";

function Registro() {
  return (
    <div className="login-container">
      <main className="login-main">
        <h2>Bem-vindo ao Streamverso</h2>

        <form className="login-form">
          <input type="text" placeholder="Digite seu Nome Completo" />
          <div className="password-field">
            <input type="text" placeholder="Digite seu E-mail" />
          </div>
          <div className="password-field">
            <input type="password" placeholder="Crie uma Senha" />
          </div>
          <div className="password-field">
            <input type="password" placeholder="Confirme sua Senha" />
          </div>

          <button type="submit">REGISTRAR</button>
        </form>
      </main>
    </div>
  );
}

export default Registro;
