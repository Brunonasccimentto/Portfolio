
import { AboutMe } from "./aboutme";
import { Footer } from "./footer";
import { Home } from "./home";
import { Skills } from "./skills";
import { useEffect, useState } from "react";
import ScrollReveal from 'scrollreveal';

export function Body(){

    
  useEffect(()=>{
    ScrollReveal().reveal(".skills", { reset: true, delay: 300 })
    ScrollReveal().reveal(".sobre", { reset: true, delay: 300 })
   }, [])

    useEffect(()=>{
        let path = window.location.pathname
    
        if(path == "/projetos"){
            window.document.body.children[1].children[0].children[0].children[1].children[4].children[1].style.display = "none"
            window.document.body.children[1].children[0].children[0].children[1].children[4].children[2].style.display = "none"
        } else {
            window.document.body.children[1].children[0].children[0].children[1].children[4].children[1].style.display = "block"
            window.document.body.children[1].children[0].children[0].children[1].children[4].children[2].style.display = "block"
            window.document.body.children[1].children[0].children[0].children[1].children[4].children[3].style.color = "#f1f5f9"
            
          
        }
    },[])

    return (

        <div className=" flex justify-center flex-col">
            <Home />
            <AboutMe />
            <Skills />
            <Footer/>
        </div>

    )
}