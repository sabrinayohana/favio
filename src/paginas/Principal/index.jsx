import React from 'react'
import Cabecalho from '../../componentes/Cabecalho'
import Conteudo from '../../componentes/Conteudo';
import Rodape from '../../componentes/Rodape';

const Principal = () => {
  return (
       /*O React substitui className por class pq class é palavra reservada do JS*/
       <>
       {/* Nosso cabecalho tem uma propriedade chamada titulo */}
      
       <Conteudo/>
       {/* <Estados/> */}

       </>
  )
}

export default Principal