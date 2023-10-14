import React from 'react'
import { useState } from 'react'

const CadastroUsuario = () => {
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (usuario.senha !== usuario.confirmarSenha) {
      alert('As senhas não coincidem. Por favor, tente novamente.');
      return;
    }

    if (usuario.senha == usuario.confirmarSenha) {
      alert('Salvo');
      return;
    }

    console.log('Usuário cadastrado:', usuario);
  };

  return (
    <div className="cadastro-usuario">
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={usuario.nome}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            value={usuario.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={usuario.senha}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirmar Senha:</label>
          <input
            type="password"
            name="confirmarSenha"
            value={usuario.confirmarSenha}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default CadastroUsuario;
