import './App.css';
import Cabecalho from './componentes/Cabecalho'
import CadastroUsuario from './componentes/CadastroUsuario';
import Conteudo from './componentes/Conteudo';
import Rodape from './componentes/Rodape';
import FazerLogin from './componentes/FazerLogin';



/*
Arquivo App JSX
Componente funcional = Porque ele é uma função
*/
function App() {

  /*Todo componente deve retornar um html entre parenteses*/
  return (
    /*O React substitui className por class pq class é palavra reservada do JS*/
    <>
    {/* Nosso cabecalho tem uma propriedade chamada titulo */}
    <Cabecalho logo="slyt.jpg" titulo="Gerenciador de Favoritos" subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!"/>
    <CadastroUsuario/>
    <FazerLogin/> 
    {/* <Conteudo/>*/}
    {/* <Estados/> */}
    <Rodape/>
    </>
  );
}

export default App;