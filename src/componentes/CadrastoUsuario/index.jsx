import React from 'react'
import styles from './CadrastoUsuario.module.css'
import { useState } from 'react';

function CadastroUsuario() {

  const [nomeUsuario, setNomeUsuario] = useState("")
  const [emailUsuario, setEmailUsuario] = useState("")
  const [senhaUsuario, setSenhaUsuario] = useState("")
  const [senhaUsuarioConfirmada, setSenhaConfirmada] = useState("")

  function salvarUsuario(nomeUsuario, emailUsuario, senhaUsuario) {
    let usuario = {nomeUsuario, emailUsuario, senhaUsuario}
    console.log(usuario)
    localStorage.setItem("usuario", JSON.stringify (usuario))
  }

  function validacaoSenha(senhaUsuario, senhaUsuarioConfirmada) {
    if(senhaUsuario !== senhaUsuarioConfirmada) {
      alert("As senhas não são iguais")
    }else{
      salvarUsuario(nomeUsuario,emailUsuario, senhaUsuario)
    }

  }

  return(
    <div className={styles.container}>
      <h1>Se cadastre no nosso site</h1>
      <form className={styles.formulario}>

      <label>Nome:</label>
      <br/>
      <input
        type='text'
        name='nomeUsuario'
        onChange={(e)=> setNomeUsuario(e.target.value)}
      ></input>
      <br/>

      <label>Email:</label>
      <br/>
      <input
        type='email'
        name='emailUsuario'
        onChange={(e)=> setEmailUsuario(e.target.value)}
      ></input>
       <br/>

      <label>Senha:</label>
      <br/>
      <input
        type='password'
        name='senhaUsuario'
        onChange={(e)=> setSenhaUsuario(e.target.value)}
      ></input>
       <br/>

      <label>Confirmação da Senha:</label>
      <br/>
      <input
        type='password'
        name='senhaUsuarioConfirmada'
        onChange={(e)=> setSenhaConfirmada(e.target.value)}
      ></input><br/>
      <input type="button" value="Cadastrar" 
          onClick={()=> validacaoSenha(senhaUsuario, senhaUsuarioConfirmada)}  />
      
      </form>
    </div>
  );
}

export default CadastroUsuario;