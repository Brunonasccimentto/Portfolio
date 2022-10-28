import {FaLinkedin, FaGithub } from "react-icons/fa"

export function SideIcons({color}){
    return(
        <div className=" w-10 h-[620px] flex flex-col items-center justify-center fixed">
            <span className=" text-cyan-300 font-thin text-5xl md:text-6xl ">|</span>
            <span className=" text-cyan-300 font-thin text-5xl md:text-6xl ">|</span>
            <span className=" text-cyan-300 font-thin text-5xl md:text-6xl ">|</span>
            <div className="flex gap-6 flex-col">
                <a href="https://www.linkedin.com/in/bruno-rodrigues-633a03252/" target="blank"> <FaLinkedin className={`w-6 h-6 md:w-9 md:h-9 ${color} mt-4 cursor-pointer`}/></a>
                <a href="https://github.com/Brunonasccimentto"  target="blank"> <FaGithub className={`w-6 h-6 md:w-9 md:h-9  ${color} mt-4 cursor-pointer`}/></a> 
            </div>
            <span className=" text-cyan-300 font-thin text-5xl md:text-6xl ">|</span>
            <span className=" text-cyan-300 font-thin text-5xl md:text-6xl ">|</span>
            <span className=" text-cyan-300 font-thin text-5xl md:text-6xl ">|</span>
        </div>

    )
}