import './styles/global.css';
import { Header } from './components/header';
import { Body } from './components/body';

function App() {
  return (
    <div className="App scroll-smooth">
        <Header menuItens={["Inicio" , "skills" , "projetos"]}></Header>
        <Body/>
    </div>
  );
}

export default App;
