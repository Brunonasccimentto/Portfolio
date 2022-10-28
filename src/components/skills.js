import { Abilities } from "./abilities";
import {FaBootstrap, FaCss3, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact} from "react-icons/fa"
import {SiJavascript, SiTailwindcss, SiJquery, SiStorybook, SiMongodb} from "react-icons/si"
import React, { useState } from "react";
import { list } from "./listAbilities";

export function Skills(){
    
    const [abilityActive, setAbilityActive] = useState()
    const [text, setText] = useState()

    function handleClick(e){

        if(e.target.innerText === undefined){
            setText("") 
        } else {
            setText(e.target.parentElement.children[2].innerText)
        }

        try {
            let target = e.target.innerText
            setAbilityActive(target)
            setText(e.target.children[2].innerText)

        } catch(err){
            if(e.target.localName === "path"){
                setText(e.target.parentElement.parentElement.parentElement.children[2].innerText)
                setAbilityActive(e.target.parentElement.parentElement.parentElement.children[1].innerText)
            }

            if(e.target.localName === "svg"){
                setText(e.target.parentElement.parentElement.children[2].innerText)
                setAbilityActive(e.target.parentElement.parentElement.children[1].innerText)
            }
        }
    
        let list = document.getElementsByClassName("AbilityItem")

        Array.from(list).forEach(item => {
            item.classList.remove(`shadow-inset`)
            e.currentTarget.classList.add(`shadow-inset`)
        })

    }

    return(
       

            <div id="skills" className=" bg-slate-300 md:h-[1080px] text-slate-900 flex justify-center items-center">
                <div  className=" skills w-full h-[100%] lg:w-[1620px] lg:h-[650px] flex flex-col lg:flex-row p-9 justify-center rounded-l-[100px]">
                    
                    <div className="flex flex-col flex-wrap pt-8 pl-10 h-[420px] lg:h-[100%] w-full lg:w-[55%] gap-8 overflow-auto lg:overflow-hidden scrollbar scrollbar-thumb-slate-900 scrollbar-track-slate-200">

                    
                    <Abilities handleClick={handleClick} desc={list[0].text} works={"Html"} 
                    icon={<FaHtml5 className="w-7 h-7 lg:w-10 lg:h-10 text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[1].text} works={"Css"} 
                    icon={<FaCss3 className="w-7 h-7 lg:w-10 lg:h-10  text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[2].text} works={"Javascript"} 
                    icon={<SiJavascript className="w-7 h-7 lg:w-10 lg:h-10  text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[3].text} works={"React"} 
                    icon={<FaReact className="w-7 h-7 lg:w-10 lg:h-10 text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[4].text} works={"Bootstrap"} 
                    icon={<FaBootstrap className="w-7 h-7 lg:w-10 lg:h-10  text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[5].text} works={"Tailwind"} 
                    icon={<SiTailwindcss className="w-7 h-7 lg:w-10 lg:h-10 text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[6].text} works={"Jquery"} 
                    icon={<SiJquery className="w-7 h-7 lg:w-10 lg:h-10 text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[7].text} works={"Storybook"} 
                    icon={<SiStorybook className="w-7 h-7 lg:w-10 lg:h-10 text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[8].text} works={"Figma"} 
                    icon={<FaFigma className="w-7 h-7 lg:w-10 lg:h-10 text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[9].text} works={"Github"} 
                    icon={<FaGithub className="w-7 h-7 lg:w-10 lg:h-10 text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[10].text} works={"Git"} 
                    icon={<FaGitAlt className="w-7 h-7 lg:w-10 lg:h-10 text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[11].text} works={"Node"} 
                    icon={<FaNodeJs className="w-7 h-7 lg:w-10 lg:h-10 text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[12].text} works={"MongoDb"} 
                    icon={<SiMongodb className="w-7 h-7 lg:w-10 lg:h-10 text-slate-900"/>}/>

                    </div>
                    
                    <div className="skills w-[100%] h-[100%] lg:w-[600px] lg:h-[100%] flex flex-col lg:gap-10 mt-3 bg-slate-900 rounded-3xl p-6 overflow-auto">
                        <h2 className=" text-xl lg:text-4xl text-cyan-300 text-shadow-sm shadow-black">{abilityActive} {abilityActive? <span className=" rotate-90">|</span> : <h2 className=" text-xl lg:text-3xl text-cyan-300 text-shadow-sm shadow-black"> Habilidades </h2>} </h2>
                        <p className=" text-md text-slate-300">{text}</p>
                        
                    </div>
                </div>
             
            </div>
      
    )
}