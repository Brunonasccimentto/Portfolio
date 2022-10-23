
import { AboutMe } from "./aboutme";
import { Home } from "./home";
import { Skills } from "./skills";


export function Body(){


    return (

        <div className=" flex justify-center flex-col">
            <Home />
            <AboutMe />
            <Skills/>
        </div>

    )
}