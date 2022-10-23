import me from "../images/eu.jpg"
import { Button, ButtonSlate } from "./buttons"
import {FaFileDownload, FaWhatsapp} from "react-icons/fa"

export function AboutMe(){
    return(
        <div id="sobre" className=" bg-slate-300 h-screen flex items-center justify-center">
            <div className="flex items-center justify-center gap-32 bg-slate-900 p-32 text-slate-300 rounded-tr-[100px] rounded-bl-[100px] rounded-tl-3xl rounded-br-3xl">

            
            <div className=" border-8 flex items-center justify-center border-cyan-300 w-[220px]">
                <img src={me} className=" w-52 h-72 -mt-6 -mr-8 mb-3"></img>
            </div>

            <div className=" sobre w-[620px] h-[320px]">
                <h3 className=" text-4xl font-semibold mb-10 text-cyan-300"> Sobre mim <span className=" rotate-90">|</span></h3>
                
                <p> Sou um jovem programador front-end junior em busca da primeira oportunidade de emprego na área de tecnologia. Sempre gostei de computadores e tecnologia, porém, segui a uma outra paixão, a licenciatura. 
                Cursei história na unb e larguei após a pandemia de covid por me sentir desanimado. Encontrei na programação essa vontade de estudar e aprender, desde então estou fazendo cursos pela internet para me capacitar à uma vaga.</p>

                <div className=" mt-9 flex gap-9">
                    <ButtonSlate text={"contato"} icon={<FaWhatsapp/>}/> <ButtonSlate text={"currículo"} icon={<FaFileDownload/>}/>
                </div>
                
            </div>

            </div>
            
            
        </div>
    )
}