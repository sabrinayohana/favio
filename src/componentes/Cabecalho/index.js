import React from 'react'
import styles from './Cabecalho.module.css'

export default function Cabecalho(props) {
  return (
    <div className={styles.cabecalho}>
      
      <img src={props.logo}/> 
    
      <p className={styles.titulo}>{props.titulo}</p>

      <ul className={styles.menu}> 
        <li> Inicio </li>
        <li> Favoritos </li>
        <li> Sobre </li>
      </ul>
    </div>
  )
}
