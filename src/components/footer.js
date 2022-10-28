import { Certificates } from "./certificates";
import HtmlCssJavascript from "../certificates/DVWBBDNR29HT297101.png"
import MongoNode from "../certificates/DVWBBDNR29NO297101.png"
import React from "../certificates/DVWBBDNR29RE297101.png"

export function Footer(){

    return(
        <div className=" bg-slate-900 flex flex-col gap-10 justify-center items-center p-8">
            <div> 
                <h3 className="text-cyan-300 text-xl md:text-3xl">Certificados</h3>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-10">
                <Certificates image={HtmlCssJavascript}/>
                <Certificates image={MongoNode}/>
                <Certificates image={React}/>
            </div>
            
        </div>
    )
}