import { Link } from "react-router-dom"

export function Header({menuItens}){
    
   
    return(
    <div className=" bg-slate-900 w-screen list-none text-slate-100 flex items-center h-24 fixed z-10">

            <div className=" ml-9 font-oswald font-light text-4xl">
                <Link to={"/portfolio"}> <h1 className=" first-letter:text-cyan-300">BnRPortfólio</h1> </Link>
            </div>
            
            <div className="flex justify-end w-full items-center gap-[46px]">

                <span className="text-cyan-300 font-thin text-6xl rotate-90">|</span>
                <span className="text-cyan-300 font-thin text-6xl rotate-90">|</span>
                <span className="text-cyan-300 font-thin text-6xl rotate-90">|</span>
                <span className="text-cyan-300 font-thin text-6xl rotate-90">|</span>
            
                <ul className=" flex gap-24 mr-11 items-center ">
                
                {menuItens.map((item, index)=>{
                return <li key={index} className={`list-none hover:brightness-110 cursor-pointer text-xl hover:text-cyan-300 transition duration-500`}> 
                {item !== "projetos"? <a href={`#${item}`} > {item}</a> : <Link to={item}> {item} </Link>} </li>})}

                </ul>

            </div>
           
        </div>
        
    )
}