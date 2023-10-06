import React, { useState } from 'react';

const FazerLogin = ({ usuariosCadastrados, onLogin }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    senha: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const usuarioEncontrado = usuariosCadastrados.find(
      (usuario) => usuario.email === loginData.email && usuario.senha === loginData.senha
    );

    if (usuarioEncontrado) {
      onLogin(usuarioEncontrado); 
    } else {
      alert('Usuário não encontrado. Verifique seu email e senha.');
    }
  };

  return (
    <div className="login">
      <h2> Fazer Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>E-mail:</label>
          <input 
          type="email" 
          name="email" 
          value={loginData.email} 
          onChange={handleInputChange} 
          required />
        </div>

        <div className="form-group">
          <label>Senha:</label>
          <input 
          type="password" 
          name="senha" 
          value={loginData.senha} 
          onChange={handleInputChange} 
          required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default FazerLogin
