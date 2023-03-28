import me from "../images/eu.jpg"
import { ButtonSlate } from "./buttons"
import {FaFileDownload} from "react-icons/fa"
import curriculo from "../certificates/currículo.pdf"
import { SiGmail } from "react-icons/si"

export function AboutMe(){
    return(
        <div id="sobre" className=" bg-slate-300 md:h-screen flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-16 2xl:gap-32 bg-slate-900 pt-8 2xl:p-16 lg:w-[80%] text-slate-300 lg:rounded-tr-[100px] lg:rounded-bl-[100px] lg:rounded-tl-3xl lg:rounded-br-3xl">

            
            <div className=" border-8 flex items-center justify-center border-cyan-300 w-[160px] 2xl:w-[220px]">
                <img src={me} className=" w-36 h-52 2xl:w-52 2xl:h-72 -mt-6 -mr-8 mb-3"></img>
            </div>

            <div className=" flex flex-col sobre w-[75%] lg:w-[620px] lg:h-[320px] gap-4 lg:gap-0">
                <h3 className=" text-2xl lg:text-3xl 2xl:text-4xl font-semibold lg:mb-10 text-cyan-300"> Sobre mim <span className=" rotate-90">|</span></h3>
                
                <p className=""> Sou um jovem programador em busca da primeira oportunidade de emprego na área de tecnologia. Sempre gostei de computadores e tecnologia, porém, segui a uma outra paixão, a licenciatura. 
                Cursei história na unb e larguei após a pandemia de covid por me sentir desanimado. Encontrei na programação essa vontade de estudar e aprender, desde então estou fazendo cursos pela internet para me capacitar à uma vaga.</p>

                <div className=" p-6 2xl:mt-9 flex justify-center items-center gap-9">
                   <a href="mailto:brunonasccimentto@gmail.com" target="_blank">  <ButtonSlate text={"contato"} icon={<SiGmail/>}/> </a> <a href={curriculo} download={"Currículo-Bruno"}> <ButtonSlate text={"currículo"} icon={<FaFileDownload/>}/> </a> 
                </div>
                
            </div>

            </div>
            
            
        </div>
    )
}