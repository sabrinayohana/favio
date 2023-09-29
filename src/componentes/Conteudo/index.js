import React from "react";
import styles from "./Conteudo.module.css";
import { useState } from 'react'


const Conteudo = () => {
  const [nomeSite, setNomeSite] = useState('');
  const [url, setUrl] = useState('');
  const [favoritos, setFavoritos] = useState([])



  function salvarFavorito() {
    console.log('favoritos>>>:', favoritos)
    console.log('estados>>>:', { nomeSite, url })
    setFavoritos([...favoritos, { nomeSite, url }])
    console.log('favoritos2>>>:', favoritos)
    localStorage.setItem("favorito", JSON.stringify({ nomeSite, url }))
  }

  return (
    <>
      <ul>
        {favoritos[0] !== undefined &&
          favoritos.map((favorito) =>  (
          <li> {favorito.nomeSite} : {favorito.url} </li>
        ))}
      </ul>

      <div className={styles.area}>
        <h1> Conteudo </h1>
        <form className={styles.formulario}>
          <label>
            <h1>{nomeSite}</h1>
          </label>
          <input
            name='nome_site'
            onChange={(evento) => {
              setNomeSite(evento.target.value);
              console.log(nomeSite);
            }}
          ></input>
          <br />
          <label>
            URL
          </label>
          <input
            type='url'
            name='url'
            onChange={(evento) => {
              setUrl(evento.target.value);
            }} >


          </input>  <br />
          <input type="button" value="Salvar"
            onClick={() => salvarFavorito()} />
          {/* <button onClick={(e)=> {e.preventDefault(); } salvarFavorito()}>Salvar</button>  */}
        </form>
      </div>
    </>
  )
}

export default Conteudo
