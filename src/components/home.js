import avatar from "../images/avatar.png"
import { Button } from "./buttons"
import { Link } from "react-router-dom"
import { SideIcons } from "./sideIcons"

export function Home(){
    return(
        
        <div id="Inicio" className="flex items-center bg-[url('../images/bg-portfolio.jpg')] h-screen bg-no-repeat bg-cover md:gap-20 xl:gap-40">
            
            <SideIcons color={"text-cyan-500 lg:text-slate-900"}/>

            <div className="flex flex-col md:flex-row justify-between w-full">
                <div className=" sm:text-left xl:text-justify flex flex-col justify-center lg:flex-shrink-0 w-[320px] md:w-[600px] ml-[60px] md:ml-[200px] animate-bounce">
                    <h2 className=" text-4xl font-semibold">Olá! Me chamo <span className=" text-cyan-300 text-shadow-sm shadow-black"> Bruno </span></h2>
                    <div className=" text-lg">
                        <p> Sou estudante e desenvolvedor Front-end Junior</p>
                        <p className=" mb-8"> Conheça meu portfólio </p>
                    </div>
                    <Link to={"/projetos"}> <Button text={"Conhecer"}/>  </Link>
                </div>
    
            <div className="hidden md:w-[300px] lg:w-[500px] md:flex justify-end items-center animate-slide mb-24 2xl:mr-64 md:flex-grow">
                <svg className="  w-[600px] h-[760px]" viewBox="-30 -70 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#CBD5E1" d="M38.8,-68.5C49.8,-60.9,57.9,-49.5,62.4,-37.5C66.9,-25.4,67.8,-12.7,66.3,-0.9C64.7,10.9,60.6,21.8,54.9,31.6C49.1,41.5,41.7,50.4,32.2,55.2C22.8,60,11.4,60.8,2,57.3C-7.4,53.9,-14.9,46.3,-26.2,42.5C-37.5,38.8,-52.7,39,-62.3,32.5C-72,26.1,-76.1,13.1,-70,3.5C-63.9,-6,-47.6,-12,-37.4,-17.6C-27.3,-23.2,-23.3,-28.4,-18.1,-39.3C-12.9,-50.3,-6.5,-67.1,3.7,-73.6C13.9,-80,27.8,-76.2,38.8,-68.5Z" transform="translate(100 100)" />
                </svg>
            
                    <img src={avatar} className=" h-[250px] md:h-[300px] lg:h-[500px] w-[250px] md:w-[300px] lg:w-[500px] fixed"></img>
                </div>
            </div>

            
        </div>
    
    )
}