import me from "../images/eu.jpg"
import { ButtonSlate } from "./buttons"
import {FaFileDownload, FaWhatsapp} from "react-icons/fa"
import curriculo from "../certificates/Currículo-Bruno.pdf"

export function AboutMe(){
    return(
        <div id="sobre" className=" bg-slate-300 h-screen flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-14 md:gap-32 bg-slate-900 p-12 md:p-32 w-screen md:w-auto text-slate-300 lg:rounded-tr-[100px] lg:rounded-bl-[100px] lg:rounded-tl-3xl lg:rounded-br-3xl">

            
            <div className=" border-8 flex items-center justify-center border-cyan-300 w-[160px] md:w-[220px]">
                <img src={me} className=" w-36 h-52 md:w-52 md:h-72 -mt-6 -mr-8 mb-3"></img>
            </div>

            <div className=" sobre md:w-[620px] md:h-[320px] ">
                <h3 className=" text-2xl md:text-4xl font-semibold mb-10 text-cyan-300"> Sobre mim <span className=" rotate-90">|</span></h3>
                
                <p> Sou um jovem programador front-end junior em busca da primeira oportunidade de emprego na área de tecnologia. Sempre gostei de computadores e tecnologia, porém, segui a uma outra paixão, a licenciatura. 
                Cursei história na unb e larguei após a pandemia de covid por me sentir desanimado. Encontrei na programação essa vontade de estudar e aprender, desde então estou fazendo cursos pela internet para me capacitar à uma vaga.</p>

                <div className=" p-5 md:mt-9 flex gap-9">
                   <a href="https://wa.link/9um6ve" target="_blank">  <ButtonSlate text={"contato"} icon={<FaWhatsapp/>}/> </a> <a href={curriculo} download={"Currículo-Bruno"}> <ButtonSlate text={"currículo"} icon={<FaFileDownload/>}/> </a> 
                </div>
                
            </div>

            </div>
            
            
        </div>
    )
}