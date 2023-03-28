import {useEffect} from "react"
import { Project } from "./projects"
import MusicApp from "../images/home.jpg"
import LandingPage from "../images/LandingPage.jpg"
import calculadora from "../images/calculadora.jpg"
import desingSystem from "../images/desing system.jpg"
import jogoDaVelha from "../images/jogo-da-velha.jpg"
import calculadoraLove from "../images/calculadoraLove.jpg"
import pacman from "../images/pacman.jpg"
import cronometro from "../images/cronometro.jpg"
import chat from "../images/chat.jpg"
import abertura from "../images/abertura.jpg"
import apiClientes from "../images/api-clientes.jpg"
import appMobile from "../images/app mobile.jpg"
import { SideIcons } from "./sideIcons"
import { useNavigate } from "react-router-dom"
import { FaBootstrap, FaCss3, FaDocker, FaFilePdf, FaHtml5, FaMobile, FaNodeJs, FaReact, FaStar } from "react-icons/fa"
import { SiExpo, SiFigma, SiJavascript, SiMongodb, SiMysql, SiSocketdotio, SiStorybook, SiTailwindcss, SiTypescript } from "react-icons/si"

export function Projetos(){

    const Navigate = useNavigate()
    
    useEffect(()=>{
        
        let path = window.location.pathname
   
        if(path === "/projetos"){
           window.document.body.children[1].children[0].children[0].children[1].children[0].addEventListener("click", ()=>{Navigate("/")})
           window.document.body.children[1].children[0].children[0].children[1].children[1].style.display = "none"
           window.document.body.children[1].children[0].children[0].children[1].children[2].style.display = "none"
           window.document.body.children[1].children[0].children[0].children[1].children[3].style.color = "#67e8f9"
        } else {
           window.document.body.children[1].children[0].children[0].children[1].children[1].style.display = "block"
           window.document.body.children[1].children[0].children[0].children[1].children[2].style.display = "block"
         
        }
   },[])

    return(
        <div className=" bg-slate-900 w-full flex justify-center items-center">
            
            

             
            <div className=" flex justify-center lg:shadow-insetSlate w-full md:p-7">
                <div className="h-screen sm:flex justify-center items-center hidden">
                <SideIcons color={"text-slate-300"}/>
                </div>

                    <div className="flex items-center justify-center gap-6 flex-wrap mt-20">
                        <Project projectName={"Music App"} link={"https://brunonasccimentto.github.io/musicApp/"} image={MusicApp} icons={[<FaReact className=" w-7 h-7"/>, <FaNodeJs className=" w-7 h-7"/>, <FaCss3 className=" w-7 h-7"/>, <SiJavascript className=" w-7 h-7"/>, <SiMongodb className="w-7 h-7"/>]} star={<FaStar/>} description={"Um aplicativo web de músicas. Esse projeto junta um pouco de tudo o que aprendi durante esses meses de aprendizado. O aplicativo conta com um sistema de registro e login de usúarios, campo de busca de suas músicas preferidas, podendo ir para a página do artista dessa música ou para a página do album que essa música pertence. Além disso pode dar 'like' e adicioná-las a sua biblioteca. tecnologias utilizadas: React.js: state, effect, router javascript node.js mongodb; css;requisições: fetch e axios."}/>
                        <Project projectName={"Landing page"} link={"https://brunonasccimentto.github.io/landingpage/"} image={LandingPage} icons={[<FaHtml5 className="w-7 h-7"/>, <FaCss3 className=" w-7 h-7"/>, <SiJavascript className=" w-7 h-7"/>, <FaBootstrap className="w-7 h-7"/>]} description={"Uma landing page profissional para advocacia."} />
                        <Project projectName={"Calculadora de apostas"} link={"https://brunonasccimentto.github.io/calculadora-de-aposta/"} image={calculadora} icons={[<FaHtml5 className="w-7 h-7"/>, <FaCss3 className=" w-7 h-7"/>, <SiJavascript className=" w-7 h-7"/>]} description={"Esse é o primeiro projeto que fiz. Utilizando um pouco de matemática, criei duas calculadoras: A primeira tem como objetivo sair ganhando nas duas apostas, sem correr mais riscos. A segunda calculadora tem como objetivo zerar a sua segunda aposta, porque a chance da primeira ser a perdedora é muito alta. Dentro do site fornece mais explicações."} />
                        <Project projectName={"Desing System"} link={"https://brunonasccimentto.github.io/design-system/"} image={desingSystem} icons={[<FaReact className="w-7 h-7"/>, <SiTailwindcss className=" w-7 h-7"/>, <SiFigma className="w-7 h-7"/>, <SiTypescript className=" w-7 h-7"/>, <SiStorybook className=" w-7 h-7"/>]} description={"Projeto criado durante a aula do Ignite Lab de 10-13 de Novembro de 2022."} />
                        <Project projectName={"Jogo da Velha"} link={"https://brunonasccimentto.github.io/jogo-da-velha/"} image={jogoDaVelha} icons={[<FaHtml5 className="w-7 h-7"/>, <FaCss3 className=" w-7 h-7"/>, <SiJavascript className=" w-7 h-7"/>]} description={"Criado durante o curso de desenvolvimento web para praticar a lógica de programação."} />
                        <Project projectName={"Calculadora de Amor"} link={"https://brunonasccimentto.github.io/love/"} image={calculadoraLove} icons={[<FaHtml5 className="w-7 h-7"/>, <FaCss3 className=" w-7 h-7"/>, <SiJavascript className=" w-7 h-7"/>]} description={"Uma 'calculadora do amor' bem básica, criada para aprender mais sobre requisições fetch."} />
                        <Project projectName={"Pacman"} link={"https://brunonasccimentto.github.io/pacman/"} image={pacman} icons={[<FaHtml5 className="w-7 h-7"/>, <FaCss3 className=" w-7 h-7"/>, <SiJavascript className=" w-7 h-7"/>]} description={"Uma atividade do curso de desenvolvimento web para praticar o uso do canvas, e outras funcionalidades."} />
                        <Project projectName={"Cronometro"} link={"https://brunonasccimentto.github.io/cronometro/"} image={cronometro} icons={[<FaHtml5 className="w-7 h-7"/>, <FaCss3 className=" w-7 h-7"/>, <SiJavascript className=" w-7 h-7"/>]} description={"Atividade incentivada e desenvolvida após a aula de timeout."} />
                        <Project projectName={"Chat"} link={"https://brunonasccimentto.github.io/chat/"} image={chat} icons={[<FaReact className="w-7 h-7"/>, <FaBootstrap className=" w-7 h-7"/>, <SiJavascript className=" w-7 h-7"/>, <FaNodeJs className=" w-7 h-7"/>, <SiSocketdotio className=" w-7 h-7"/>]} description={"Uma aplicação de chat para conversação de usuarios simultaneamente, utilizando socket.io com node para fazer essa troca de mensagens."} />
                        <Project projectName={"Especificação de software"} link={"https://github.com/Brunonasccimentto/Especificacao-de-software-Asgard"} image={abertura} icons={[<FaFilePdf className="w-7 h-7"/>]} description={"Especificação de software - Acessando o link voce encontra toda a documentação para a criação do software, e tambem o DER do banco de dados que foi desenvolvido com base nas regras."} />
                        <Project projectName={"api-clientes"} link={"https://github.com/Brunonasccimentto/client_api"} image={apiClientes} icons={[<FaNodeJs className="w-7 h-7"/>, <FaDocker className="w-7 h-7"/>,  <SiMysql className="w-7 h-7"/>]} description={"Api desenvolvida durante uma atividade na prodigyan, ao qual fiquei responsável em fazer o backend e passar para o front a API utilizando docker. "} />
                        <Project projectName={"calculadora de apostas Mobile"} link={"https://github.com/Brunonasccimentto/calculadora-native"} image={appMobile} icons={[<FaReact className="w-7 h-7"/>, <FaMobile className="w-7 h-7"/>,  <SiExpo className="w-7 h-7"/>]} description={"Aplicativo mobile desenvolvivido com o objetivo de fazer uma transição do web para mobile, além de melhorar o código da calculadora anterior."} />
                    </div>
            </div>     
        </div>
    )
}