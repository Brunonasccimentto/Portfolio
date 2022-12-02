import * as Dialog from '@radix-ui/react-dialog';

export function Project({image, projectName, description, link, star, icons}){
    return(
        
        <div className='flex flex-col items-center justify-center gap-2 w-96'>
            <div className='flex items-center gap-3'>
                <span className=' text-slate-300 lg:lg xxl:text-xl'>{projectName}</span>
                <span className=' text-yellow-400 text-xl'>{star}</span> 
            </div>
        <Dialog.Root>
            <Dialog.Trigger asChild> 
                <img src={image} className=" w-96 lg:w-72 lg:h-46 xxl:w-80 xxl:h-52 rounded-md cursor-pointer object-contain"></img>    
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='fixed top-0 left-0 right-0 bottom-0 bg-black/60 grid place-items-center overflow-y-auto z-20'>
                <Dialog.Content className=' bg-gradient-to-r from-indigo-900 via-slate-900 to-[#070707] rounded-md fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full md:w-[550px] lg:w-[550px] lg:h-[690px] p-8 outline-none shadow-modalShadow shadow-black flex flex-col gap-4'>
                <a href={`${link}`} target="_blank"> <img src={image} className=" w-[100%] h-[200px] lg:h-[300px] rounded-lg cursor-pointer object-contain"></img>  </a> 
                    <Dialog.Description className=' text-slate-300 w-[100%] flex gap-3'> {icons} </Dialog.Description>   
                    <Dialog.Title className=' text-cyan-300 text-xl font-semibold'> {projectName} <span className=" rotate-90">|</span> </Dialog.Title>               
                    <Dialog.Description className=' text-slate-300 h-[100%] text-sm'> {description} </Dialog.Description>
                    <Dialog.Description className=' text-cyan-300 underline decoration-cyan-300 font-semibold text-sm'> Clique na imagem para ir a página do projeto </Dialog.Description>
                </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
        </div>
    )
}