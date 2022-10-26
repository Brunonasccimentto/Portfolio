import { createContext, useEffect, useState } from "react"
import { Project } from "./projects"
import MusicApp from "../images/home.jpg"
import LandingPage from "../images/LandingPage.jpg"
import calculadora from "../images/calculadora.jpg"
import desingSystem from "../images/desing system.jpg"
import jogoDaVelha from "../images/jogo-da-velha.jpg"
import calculadoraLove from "../images/calculadoraLove.jpg"
import pacman from "../images/pacman.jpg"
import cronometro from "../images/cronometro.jpg"
import { SideIcons } from "./sideIcons"

export function Projetos(){

    useEffect(()=>{
        let path = window.location.pathname
    
        if(path == "/projetos"){
            window.document.body.children[1].children[0].children[0].children[1].children[4].children[1].style.display = "none"
            window.document.body.children[1].children[0].children[0].children[1].children[4].children[2].style.display = "none"
            window.document.body.children[1].children[0].children[0].children[1].children[4].children[3].style.color = "#67e8f9"
        } else {
            window.document.body.children[1].children[0].children[0].children[1].children[4].children[1].style.display = "block"
            window.document.body.children[1].children[0].children[0].children[1].children[4].children[2].style.display = "block"
        }
    },[])  

    return(
        <div className=" bg-slate-900 w-screen h-screen flex items-center justify-center flex-row">
            <div className=" mb-[630px]">
            <SideIcons color={"text-slate-300"}/>
            </div>
            <div className=" flex items-center justify-center gap-8 flex-wrap shadow-insetSlate p-7">
                <Project projectName={"Music App"} link={"https://brunonasccimentto.github.io/musicApp/"} image={MusicApp} description={"Um aplicativo web de músicas. Esse projeto junta um pouco de tudo o que aprendi durante esses meses de aprendizado. O aplicativo conta com um sistema de registro e login de usúarios, campo de busca de suas músicas preferidas, podendo ir para a página do artista dessa música ou para a página do album que essa música pertence. Além disso pode dar 'like' e adicioná-las a sua biblioteca. tecnologias utilizadas: React.js: state, effect, router javascript node.js mongodb; css;requisições: fetch e axios"}/>
                <Project projectName={"Landing page"} link={"https://brunonasccimentto.github.io/landingpage/"} image={LandingPage} description={"Uma landing page profissional para advocacia"} />
                <Project projectName={"Calculadora de apostas"} link={"https://brunonasccimentto.github.io/calculadora-de-aposta/"} image={calculadora} description={"Esse é o primeiro projeto que fiz. Utilizando um pouco de matemática, criei duas calculadoras: A primeira tem como objetivo sair ganhando nas duas apostas, sem correr mais riscos. A segunda calculadora tem como objetivo zerar a sua segunda aposta, porque a chance da primeira ser a perdedora é muito alta. Dentro do site fornece mais explicações"} />
                <Project projectName={"Desing System"} link={"https://brunonasccimentto.github.io/design-system/"} image={desingSystem} description={"Projeto criado durante a aula do Ignite Lab de 10-13 de Novembro de 2022"} />
                <Project projectName={"Jogo da Velha"} link={"https://brunonasccimentto.github.io/jogo-da-velha/"} image={jogoDaVelha} description={"Criado durante o curso de desenvolvimento web para praticar a lógica de programação"} />
                <Project projectName={"Calculadora de Amor"} link={"https://brunonasccimentto.github.io/love/"} image={calculadoraLove} description={"Uma 'calculadora do amor' bem básica, criada para aprender mais sobre requisições fetch"} />
                <Project projectName={"Pacman"} link={"https://brunonasccimentto.github.io/pacman/"} image={pacman} description={"Uma atividade do curso de desenvolvimento web para praticar o uso do canvas, e outras funcionalidades."} />
                <Project projectName={"Cronometro"} link={"https://brunonasccimentto.github.io/cronometro/"} image={cronometro} description={"Atividade incentivada e desenvolvida após a aula de timeout"} />
            </div>
            
        </div>
    )
}