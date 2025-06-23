import React, { useState } from 'react';
import { LuFullscreen } from "react-icons/lu";
import { MdOutlineFullscreenExit } from "react-icons/md";
import { useKernelContext } from '../context/kernelContext';
import AppleMenuDropdown from './AppleMenuDropdown';

const Menubar = () => {
  const { isfullscreen, enterFullscreen, exitFullscreen, showMenu, setShowMenu } = useKernelContext();
  return (
    <>
    <div className='select-none w-full h-[22px] backdrop-blur-md bg-black/15 px-2 flex text-white items-center'>
      <div className='h-[100%] w-[60%] flex items-center'>
        <div onClick={() => setShowMenu(!showMenu)} className={`h-[100%] w-[4%] ${showMenu && 'bg-black/30'} flex items-center justify-center`}><img className='w-6 h-6' src="/icons/apple.png" alt="apple menu" /></div>
        <h6 className='font-bold text-[9pt] ml-[6px] tracking-tight'>Finder</h6>
      </div>
      <div className='w-[40%] h-full flex justify-end items-center hover:cursor-pointer'>
        {!isfullscreen ? <LuFullscreen onClick={enterFullscreen} title="Enter Fullscreen" className='w-4 h-4'/> : <MdOutlineFullscreenExit title="Exit Fullscreen" onClick={exitFullscreen} className='w-4 h-4' />}
      </div>
    </div>
    {/* Apple Dropdown */}
    {showMenu && <AppleMenuDropdown onClick={() => setShowMenu(!showMenu)} onClose={() => setShowMenu(false)} />}
    </>
  )
}

export default Menubar
