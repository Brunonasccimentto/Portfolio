




export function Abilities({works, icon, handleClick, desc}){

    return(
            <div onClick={handleClick} className=" AbilityItem bg-slate-300 text-slate-900 p-11 2xl:p-14 w-20 h-28 2xl:w-28 2xl:h-36 flex flex-col items-center justify-center rounded-xl shadow-morfism hover:shadow-inset cursor-pointer">
                <span className=""> {icon} </span>
                <span className=" text-sm"> {works} </span>
                <span className=" hidden"> {desc} </span>
            </div>
    
    )
}