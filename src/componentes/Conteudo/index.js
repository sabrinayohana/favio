import React from "react";
import styles from "./Conteudo.module.css";
import { useState } from 'react'


const Conteudo = () => { 
const [nomeSite,setNomeSite] =useState('');
const [url,setUrl] =useState('');

let favoritos = []


function salvarFavorito() {
  console.log('favoritos>>>:', favoritos)
  console.log('estados>>>:', {nomeSite, url})
  favoritos=[...favoritos, {nomeSite,url}]
  console.log('favoritos2>>>:', favoritos)
    localStorage.setItem("favorito", JSON.stringify ({nomeSite,url}) )
}

  return (
    <div className={styles.area}>
        
    <form className={styles.formulario} onSubmit={()=>alert("Favorito salvo")}>
        <label>
           <h1>{nomeSite}</h1>
        </label> 
        <input 
        name='nome_site' 
        onChange={(evento)=> {
          setNomeSite(evento.target.value);
          console.log(nomeSite); }} 
          ></input>  
          <br/>
        <label>
            URL
        </label>  
        <input 
        type='url' 
        name='url'
        onChange={(evento) => {setUrl(evento.target.value); 
           } } >
        
    
          </input>  <br/>
        <button onClick={()=>salvarFavorito()}>Salvar</button>  
    </form>
    </div>
  )
}

export default Conteudo
