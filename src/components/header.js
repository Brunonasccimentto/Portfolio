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
    <div className=" bg-slate-900 w-[100%] list-none text-slate-100 flex flex-col lg:flex-row items-center lg:justify-between lg:h-18 xxl:h-24 lg:fixed z-10">

        <div className="flex flex-row w-full justify-between items-center">

            <div className=" ml-5 lg:ml-9 font-oswald font-light text-3xl lg:text-4xl">
                <Link to={"/portfolio"}> <h1 className=" first-letter:text-cyan-300">BnRPortfólio</h1> </Link>
            </div>
            
            <div onClick={toggleHeader} className="flex flex-col lg:flex-row w-20 cursor-pointer lg:cursor-default justify-end lg:w-full items-center lg:gap-[46px] lg:mr-32">

                <span className="text-cyan-300 -mb-7 lg:-mb-0  -ml-1 font-thin text-3xl rotate-90 lg:text-6xl lg:rotate-90 ">|</span>
                <span className="text-cyan-300 -mb-7 lg:-mb-0  -ml-1  font-thin text-3xl rotate-90 lg:text-6xl lg:rotate-90 ">|</span>
                <span className="text-cyan-300 -mb-7 lg:-mb-0  -ml-1  font-thin text-3xl rotate-90 lg:text-6xl lg:rotate-90 ">|</span>
                <span className="text-cyan-300 -ml-1 font-thin text-3xl rotate-90 lg:text-6xl lg:rotate-90 ">|</span>

            </div>

        </div> 

            <ul className={`flex gap-2 -mt-4 lg:-mt-0 p-2 lg:p-0 w-full lg:w-auto lg:gap-24 lg:mr-11 items-center flex-col transition-all duration-700 ${slide} overflow-hidden lg:overflow-visible lg:justify-end lg:flex lg:flex-row`}>
            
            {menuItens.map((item, index)=>{
            return <li key={index} className={`list-none hover:brightness-110 cursor-pointer mt-1 lg:mt-0 lg:text-lg xxl:text-xl hover:text-cyan-300 transition-all duration-500 lg:block`}> 
            {item !== "projetos"? <a href={`#${item}`}>{item}</a> : <Link to={item}> {item} </Link>} </li>})}

            </ul>
           
        </div>
        
    )
}