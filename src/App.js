import './styles/global.css';
import { Header } from './components/header';
import { Body } from './components/body';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Projetos } from './components/projetos';

function App() {

  return (
    <div className="App">
      <Router>
        <Header menuItens={["Inicio" ,"sobre", "skills" , "projetos"]}></Header>
        <Routes>
          <Route path="/*" element={<Body/>}/>
          <Route path="/projetos" element={<Projetos/>}/>
        </Routes>     
      </Router>
        
    </div>
  );
}

export default App;
