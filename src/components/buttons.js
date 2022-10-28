import { FaFileDownload } from "react-icons/fa"

export function Button({text}){
    return(
        <>
            <button className=" w-24 md:w-40 bg text-shadow-sm p-2 rounded-2xl shadow-morfism hover:shadow-inset">
            <a className=" text-slate-900 font-semibold">{text}</a>
            </button>
        </>
    )
}

export function ButtonSlate({text, icon}){
    return(
        <>
            <button className=" md:w-40 bg text-shadow-sm p-2 rounded-2xl shadow-morfismSlate hover:shadow-insetSlate flex items-center justify-center gap-2">
            {icon}
            <a className=" text-slate-300 font-semibold">{text}</a>
            </button>
        </>
    )
}