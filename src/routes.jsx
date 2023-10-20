import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import Principal from './paginas/Principal'

const routes = () => {
  return (
    <BrowserRouter> 
    
    <Routes>

        <Route path='/' element= {<Principal/>} />
        <Route path='/login' element= {<FazerLogin/>} />
        <Route path='/cadastro' element= {<CadastroUsuario/>} />

    </Routes>

    </BrowserRouter>
  )
}

export default routes