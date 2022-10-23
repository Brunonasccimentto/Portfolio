




export function Abilities({works, icon, handleClick, desc}){

    return(
            <div onClick={handleClick} className=" AbilityItem bg-slate-300 text-slate-900 p-14 w-28 h-36 flex flex-col items-center justify-center rounded-xl shadow-morfism hover:shadow-inset cursor-pointer z-10">
                <span> {icon} </span>
                <span> {works} </span>
                <span className=" hidden"> {desc} </span>
            </div>
    
    )
}