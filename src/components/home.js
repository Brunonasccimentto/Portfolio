import avatar from "../images/avatar.png"
import {FaLinkedin, FaGithub } from "react-icons/fa"
import { Button } from "./buttons"
import { AboutMe } from "./aboutme"
import { Header } from "./header"

export function Home(){
    return(
        
        <div className="flex items-center bg-[url('../images/bg-portfolio.jpg')] h-screen bg-no-repeat bg-cover md:gap-20 xl:gap-40">
            

            <div className=" w-10 h-[620px] flex flex-col items-center justify-center fixed">
                <span className=" text-cyan-300 font-thin text-6xl ">|</span>
                <span className=" text-cyan-300 font-thin text-6xl ">|</span>
                <span className=" text-cyan-300 font-thin text-6xl ">|</span>
                <div className="flex gap-6 flex-col">
                    <a href="https://www.linkedin.com/in/bruno-rodrigues-633a03252/" target="blank"> <FaLinkedin className=" w-9 h-9 text-slate-900 mt-4 cursor-pointer"/></a>
                    <a href="https://github.com/Brunonasccimentto"  target="blank"> <FaGithub className=" w-9 h-9 text-slate-900 cursor-pointer"/></a> 
                </div>
                <span className=" text-cyan-300 font-thin text-6xl ">|</span>
                <span className=" text-cyan-300 font-thin text-6xl ">|</span>
                <span className=" text-cyan-300 font-thin text-6xl ">|</span>
            </div>

            <div className=" sm:text-left xl:text-justify 2xl:flex-shrink-0 md:w-[600px] sm:w-[250px] ml-[200px] animate-bounce">
                <h2 className=" text-[36px] font-semibold">Olá! Me chamo <span className=" text-cyan-300 text-shadow-sm shadow-black"> Bruno </span></h2>
                <div className=" text-lg">
                    <p> Sou estudante e desenvolvedor Junior Front-end</p>
                    <p className=" mb-8"> Conheça meu portfólio </p>
                </div>
                <Button text={"Conhecer"}/>
            </div>
    
            <div className="  w-[500px] flex justify-end items-center animate-slide mb-24 2xl:mr-64 flex-grow">
            <svg className="  w-[600px] h-[760px]" viewBox="-30 -70 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#CBD5E1" d="M38.8,-68.5C49.8,-60.9,57.9,-49.5,62.4,-37.5C66.9,-25.4,67.8,-12.7,66.3,-0.9C64.7,10.9,60.6,21.8,54.9,31.6C49.1,41.5,41.7,50.4,32.2,55.2C22.8,60,11.4,60.8,2,57.3C-7.4,53.9,-14.9,46.3,-26.2,42.5C-37.5,38.8,-52.7,39,-62.3,32.5C-72,26.1,-76.1,13.1,-70,3.5C-63.9,-6,-47.6,-12,-37.4,-17.6C-27.3,-23.2,-23.3,-28.4,-18.1,-39.3C-12.9,-50.3,-6.5,-67.1,3.7,-73.6C13.9,-80,27.8,-76.2,38.8,-68.5Z" transform="translate(100 100)" />
            </svg>
           
                 <img src={avatar} className="h-[500px] w-[500px] fixed"></img>
            </div>

            
        </div>
    
    )
}