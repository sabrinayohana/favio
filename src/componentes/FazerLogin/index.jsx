import styles from './FazerLogin.module.css'
import { useState } from 'react';

function FazerLogin() {
    const [emailUsuario, setEmailUsuario] = useState("")
    const [senhaUsuario, setSenhaUsuario] = useState("")

    function confimarSenha() {
        let usuario = JSON.parse(localStorage.getItem('usuario'))
        
        let emailCadastrado = usuario.emailUsuario
        let senhaCadastrada = usuario.senhaUsuario

        if(emailCadastrado === emailUsuario && senhaCadastrada === senhaUsuario) {
            alert("Bem vindo ao site!")
        }else{
            alert("Senha ou email incorretos")
        }
    }

    return (
        <div className={styles.container}>
         <h2 className={styles.titulo}>Login</h2>
            <form className={styles.forms}>
            <div/>
            <label>Email:</label>
            <input
                type='text'
                name="emailUsuario"
                onChange={(e)=> setEmailUsuario(e.target.value)}
            ></input>
            <div/>

            <div/>
            <label>Senha:</label>
            <input
                type='password'
                name="senhaUsuario"
                onChange={(e=> setSenhaUsuario(e.target.value))}
            ></input>
             <div/>

            <input
                type="button"
                value="Login"
                onClick={()=> confimarSenha()}
            />
            </form>
        </div>
    );
}

export default FazerLogin;