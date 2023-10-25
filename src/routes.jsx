import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Principal from './paginas/Principal'
import FazerLogin from './paginas/FazerLogin'
import CadastroUsuario from './paginas/CadastroUsuario'
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape'


const Rotas = () => {
  return (
    <BrowserRouter> 
    <Cabecalho logo="slyt.jpg" titulo="Gerenciador de Favoritos" subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!"/>
    
    <Routes>

        <Route path='/' element= {<Principal/>} />
        <Route path='/login' element= {<FazerLogin/>} />
        <Route path='/cadastro' element= {<CadastroUsuario/>} />

    </Routes>
    <Rodape/>
    </BrowserRouter>
  )
}

export default Rotas;