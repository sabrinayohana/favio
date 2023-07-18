
import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Conteudo,{OlaMundo} from './componentes/Conteudo';
import Rodape from './componentes/Rodape'


/*
Arquivo App JSX
Componente Funcional = Porque ele é uma função
*/
function App() {

OlaMundo();

  /*Todo componente deve retornar um html entre parenteses*/
  return (
    /*O react substitui o className por class, porque class é uma palavra reservada do JS*/
  <>
  
   {/* Nosso cabecalho tem uma propiedade chamada titulo*/}

  <Cabecalho logo="logo192.png" titulo="Genrenciador de Favoritos" subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!"/>

  <Conteudo/>

  <Rodape/>

  </>




  );
}

export default App;
