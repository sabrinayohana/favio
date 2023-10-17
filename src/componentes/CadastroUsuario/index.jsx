import React from 'react'
import styles from './CadrastoUsuario.module.css'
import { useState } from 'react';

function CadastroUsuario() {

  const [nomeUsuario, setNomeUsuario] = useState("")
  const [emailUsuario, setEmailUsuario] = useState("")
  const [senhaUsuario, setSenhaUsuario] = useState("")
  const [senhaConfirmarSenha, setConfirmarSenha] = useState("")

  function salvarUsuario(nomeUsuario, emailUsuario, senhaUsuario) {
    let usuario = {nomeUsuario, emailUsuario, senhaUsuario}
    console.log(usuario)
    localStorage.setItem("usuario", JSON.stringify (usuario))
  }

  function validarSenha(senhaUsuario, senhaConfirmarSenha) {
    if(senhaUsuario !== senhaConfirmarSenha) {
      alert("As senhas não coincidem. Tente novamente.")
    }else{
      salvarUsuario(nomeUsuario,emailUsuario, senhaUsuario)
    }

  }

  return(
    <div className={styles.container}>
      <h2>Cadastro</h2>
      <form className={styles.form}>
      <div/>
      <label>Nome:</label>
      <input
        type='text'
        name='nomeUsuario'
        onChange={(e)=> setNomeUsuario(e.target.value)}
      ></input>
      <div/>

      <div/>
      <label>Email:</label>
      <input
        type='email'
        name='emailUsuario'
        onChange={(e)=> setEmailUsuario(e.target.value)}
      ></input>
       <div/>
       
       <div/>
      <label>Senha:</label>
      <input
        type='password'
        name='senhaUsuario'
        onChange={(e)=> setSenhaUsuario(e.target.value)}
      ></input>
       <div/>

       <div/>
      <label>Confirmar Senha:</label>
      <input
        type='password'
        name='senhaConfirmarSenha'
        onChange={(e)=> setConfirmarSenha(e.target.value)}
      ></input><div/>
      <input type="button" value="Salvar" 
          onClick={()=> validarSenha(senhaUsuario, senhaConfirmarSenha)}  />
      
      </form>
    </div>
  );
}

export default CadastroUsuario;