import { AboutMe } from "./aboutme";
import { Home } from "./home";


export function Body(){
    return(
        <div className=" flex justify-center flex-col">
            <Home/>
            <AboutMe/>
        </div>
    )
}