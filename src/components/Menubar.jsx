import React from 'react'
import { LuFullscreen } from "react-icons/lu";
import { MdOutlineFullscreenExit } from "react-icons/md";
import { useKernelContext } from '../context/kernelContext';

const Menubar = () => {
  const { isfullscreen, enterFullscreen, exitFullscreen } = useKernelContext();
  return (
    <div className='w-full h-[11px] backdrop-blur-md bg-black/15 px-1.5 flex text-white items-center'>
      <div className='h-[100%] w-[60%] flex items-center'>
        <div className='h-[100%] w-[3.5%] flex items-center justify-center'><img className='w-3 h-3' src="/icons/apple.png" alt="apple menu" /></div>
        <h6 className='font-bold text-[4.5pt] ml-[5px] tracking-tight'>Finder</h6>
      </div>
      <div className='w-[40%] h-full flex justify-end items-center hover:cursor-pointer'>
        {!isfullscreen ? <LuFullscreen onClick={enterFullscreen} title="Enter Fullscreen" className='w-2 h-2'/> : <MdOutlineFullscreenExit title="Exit Fullscreen" onClick={exitFullscreen} className='w-2 h-2' />}
      </div>
    </div>
  )
}

export default Menubar
