
export function Header({menuItens}){

   
    return(
    <div className=" bg-slate-900 w-full list-none text-slate-100 flex items-center h-24 absolute">

            <div className=" ml-9 font-oswald font-light text-4xl">
                <h1 className=" first-letter:text-cyan-300">BnRPortfólio</h1>
            </div>
            
            <div className="flex justify-end w-full items-center gap-[46px]">

                <span className="text-cyan-300 font-thin text-6xl rotate-90">|</span>
                <span className="text-cyan-300 font-thin text-6xl rotate-90">|</span>
                <span className="text-cyan-300 font-thin text-6xl rotate-90">|</span>
                <span className="text-cyan-300 font-thin text-6xl rotate-90">|</span>
            
                <ul className=" flex gap-24 mr-11 items-center ">
                
                {menuItens.map((item, index)=>{
                return <li key={index} className="list-none hover:brightness-110 cursor-pointer hover:underline decoration-cyan-300 text-xl">{item}</li>})}

                </ul>

            </div>
           
        </div>
        
    )
}