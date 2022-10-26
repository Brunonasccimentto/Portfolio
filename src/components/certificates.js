import * as Dialog from '@radix-ui/react-dialog';
import { Button } from './buttons';

export function Certificates({image}){

    return(
        
        <Dialog.Root>
            <Dialog.Trigger asChild>

                <img src={image} className=" w-80 h-52 rounded-md cursor-pointer"></img>
            </Dialog.Trigger>
            <Dialog.Overlay className='fixed top-0 left-0 right-0 bottom-0 bg-black/60 grid place-items-center overflow-y-auto z-20'>
                <Dialog.Content className=' bg-slate-300rounded-md fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[650px] h-[400px] trans outline-none shadow-modalShadow shadow-black'>
                    <img src={image} className=" w-[650px] h-[400px] rounded-lg"></img>     
                </Dialog.Content>
            </Dialog.Overlay>
                   
        </Dialog.Root>
    )
}