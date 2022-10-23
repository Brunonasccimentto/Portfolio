import { Abilities } from "./abilities";
import {FaBootstrap, FaCss3, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaNode, FaNodeJs, FaReact} from "react-icons/fa"
import {SiJavascript, SiTailwindcss, SiJquery, SiStorybook, SiMongodb} from "react-icons/si"
import React, { useState } from "react";
import { list } from "./listAbilities";

export function Skills(){
    
    const [abilityActive, setAbilityActive] = useState()
    const [text, setText] = useState()

    function handleClick(e){

        
        if(e.target.innerText == undefined){
            setText("") 
        } else {
            setText(e.target.parentElement.children[2].innerText)
        }

        try {
            let target = e.target.innerText
            setAbilityActive(target)
            setText(e.target.children[2].innerText)

        } catch(err){

        }
    
        let list = document.getElementsByClassName("AbilityItem")

        Array.from(list).forEach(item => {
            item.classList.remove(`shadow-inset`)
            e.currentTarget.classList.add(`shadow-inset`)
        })

    }

    return(
       

            <div className=" h-screen bg-slate-300 text-slate-900 flex justify-end items-center">
                <div className=" w-[1620px] h-[620px] flex-col  flex flex-wrap justify-start p-9 gap-6 rounded-l-[100px]">
                    
                    <div id="skills" className="skills flex  flex-col flex-wrap h-[100%] w-[680px] gap-8 pt-4 ">

                    
                    <Abilities handleClick={handleClick} desc={list[0].text} works={"Html"} 
                    icon={<FaHtml5 className="w-10 h-10 text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[1].text} works={"Css"} 
                    icon={<FaCss3 className="w-10 h-10  text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[2].text} works={"Javascript"} 
                    icon={<SiJavascript className="w-10 h-10  text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[3].text} works={"React"} 
                    icon={<FaReact className="w-10 h-10 text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[4].text} works={"Bootstrap"} 
                    icon={<FaBootstrap className="w-10 h-10  text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[5].text} works={"Tailwind"} 
                    icon={<SiTailwindcss className="w-10 h-10 text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[6].text} works={"Jquery"} 
                    icon={<SiJquery className="w-10 h-10 text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[7].text} works={"Storybook"} 
                    icon={<SiStorybook className="w-10 h-10 text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[8].text} works={"Figma"} 
                    icon={<FaFigma className="w-10 h-10 text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[9].text} works={"Github"} 
                    icon={<FaGithub className="w-10 h-10 text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[10].text} works={"Git"} 
                    icon={<FaGitAlt className="w-10 h-10 text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[11].text} works={list[11].name} 
                    icon={<FaNodeJs className="w-10 h-10 text-slate-900"/>}/>
                    <Abilities handleClick={handleClick} desc={list[12].text} works={list[12].name} 
                    icon={<SiMongodb className="w-10 h-10 text-slate-900"/>}/>

                    </div>
                    
                    <div className="skills w-[600px] h-[100%] flex flex-col gap-10 mt-3">
                        <h2 className=" text-4xl text-cyan-300 text-shadow-sm shadow-black">{abilityActive} {abilityActive? <span className=" rotate-90">|</span> : <h2 className=" text-4xl text-cyan-300 text-shadow-sm shadow-black"> Habilidades </h2>} </h2>
                        <p className=" text-lg">{text}</p>
                        <span className=" bg-cyan-300 h-6 w-[40%] border-2 border-slate-900 rounded-2xl flex items-center">40%</span>
                    </div>
                </div>

                
               
            </div>
      
    )
}