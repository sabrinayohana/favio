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
            alert("Senha correta. Bem vindo ao site")
        }else{
            alert("Senha ou email incorretas")
        }
    }

    return (
        <div className={styles.container}>
         <h1>Fazer login</h1>
            <form className={styles.formulario}>

            <label>Email:</label>
            <br/>
            <input
                type='text'
                name="emailUsuario"
                onChange={(e)=> setEmailUsuario(e.target.value)}
            ></input>
            <br/>

            <label>Senha:</label>
            <br/>
            <input
                type='password'
                name="senhaUsuario"
                onChange={(e=> setSenhaUsuario(e.target.value))}
            ></input>
            <br/>
            <input
                type="button"
                value="Logar"
                onClick={()=> confimarSenha()}
            />
            </form>
        </div>
    );
}

export default FazerLogin;