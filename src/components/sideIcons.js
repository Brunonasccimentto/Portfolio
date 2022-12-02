import {FaLinkedin, FaGithub } from "react-icons/fa"

export function SideIcons({color}){
    return(
        <div className=" w-10 justify-center -mt-[20vh] lg:mt-[0px] flex flex-col items-center fixed">
            <span className=" text-cyan-300 font-thin text-5xl lg:text-6xl -mt-3">|</span>
            <span className=" text-cyan-300 font-thin text-5xl lg:text-6xl -mt-3">|</span>
            <span className=" text-cyan-300 font-thin text-5xl lg:text-6xl -mt-3">|</span>
            <div className="flex gap-6 flex-col">
                <a href="https://www.linkedin.com/in/bruno-rodrigues-633a03252/" target="blank"> <FaLinkedin className={`w-6 h-6 2xl:w-9 2xl:h-9 ${color} mt-4 cursor-pointer`}/></a>
                <a href="https://github.com/Brunonasccimentto"  target="blank"> <FaGithub className={`w-6 h-6 2xl:w-9 2xl:h-9  ${color} mt-4 cursor-pointer`}/></a> 
            </div>
            <span className=" text-cyan-300 font-thin text-5xl lg:text-6xl -mb-3">|</span>
            <span className=" text-cyan-300 font-thin text-5xl lg:text-6xl -mb-3">|</span>
            <span className=" text-cyan-300 font-thin text-5xl lg:text-6xl -mb-3">|</span>
        </div>

    )
}