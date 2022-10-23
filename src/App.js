import './styles/global.css';
import { Header } from './components/header';
import { Body } from './components/body';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function App() {

  useEffect(()=>{
    ScrollReveal().reveal(".skills", { reset: true, delay: 300 })
    ScrollReveal().reveal(".sobre", { reset: true, delay: 300 })
   }, [])
  
  return (
    <div className="App">
        <Header menuItens={["Inicio" ,"sobre", "skills" , "projetos"]}></Header>
        <Body/>
    </div>
  );
}

export default App;
