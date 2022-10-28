import { useState } from "react"
import { Link } from "react-router-dom"

export function Header({menuItens}){

    const [slide, setslide] = useState("h-0")
    
    function toggleHeader(){
        if(slide != "h-0"){
            setslide("h-0")

        } else {
            setslide("h-[170px]")
        }
    }
   
    return(
    <div className=" bg-slate-900 w-screen list-none text-slate-100 flex flex-col lg:flex-row items-center md:justify-between md:h-24 fixed z-10">

        <div className="flex flex-row w-full justify-between items-center">

            <div className=" ml-5 md:ml-9 font-oswald font-light text-3xl md:text-4xl">
                <Link to={"/portfolio"}> <h1 className=" first-letter:text-cyan-300">BnRPortfólio</h1> </Link>
            </div>
            
            <div onClick={toggleHeader} className="flex flex-col md:flex-row w-20 cursor-pointer md:cursor-default justify-end md:w-full items-center md:gap-[46px] md:mr-32">

                <span className="text-cyan-300 -mb-7 md:-mb-0 font-thin text-3xl rotate-90 md:text-6xl md:rotate-90 ">|</span>
                <span className="text-cyan-300 -mb-7 md:-mb-0  font-thin text-3xl rotate-90 md:text-6xl md:rotate-90 ">|</span>
                <span className="text-cyan-300 -mb-7 md:-mb-0  font-thin text-3xl rotate-90 md:text-6xl md:rotate-90 ">|</span>
                <span className="text-cyan-300  font-thin text-3xl rotate-90 md:text-6xl md:rotate-90 ">|</span>

            </div>

        </div> 

            <ul className={` flex gap-2 -mt-4 md:-mt-0 p-2 md:p-0 w-full md:w-auto md:gap-24 md:mr-11 items-center flex-col transition-all duration-700 ${slide} overflow-hidden md:overflow-visible md:justify-end md:flex md:flex-row`}>
            
            {menuItens.map((item, index)=>{
            return <li key={index} onClick={toggleHeader} className={`list-none hover:brightness-110 cursor-pointer mt-[1px] md:mt-0 text-xl hover:text-cyan-300 transition-all duration-500 md:block`}> 
            {item !== "projetos"? <a href={`#${item}`}>{item}</a> : <Link to={item}> {item} </Link>} </li>})}

            </ul>
           
        </div>
        
    )
}