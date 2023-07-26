import React from 'react'
import styles from './Cabecalho.module.css'

export default function Cabecalho(props) {
  return (
    <div className={styles.cabecalho}>
      
      <img src={props.logo}/> 
    
      <p className={styles.titulo}>{props.titulo}</p>

      <p className={styles.menu}> 
        <p> INICIO </p>
        <p> FAVORITOS </p>
        <p> EXPLORAR </p>
      </p>
    </div>
  )
}
