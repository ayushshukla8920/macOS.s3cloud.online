import React, { useState, useEffect } from 'react';
import { LuFullscreen } from "react-icons/lu";
import { MdOutlineFullscreenExit } from "react-icons/md";
import { useKernelContext } from '../context/kernelContext';
import AppleMenuDropdown from './AppleMenuDropdown';
import { IoBatteryCharging } from "react-icons/io5";
import { IoIosWifi } from "react-icons/io";
import { FaBluetoothB } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Menubar = () => {
  const { isfullscreen, enterFullscreen, exitFullscreen, showMenu, setShowMenu } = useKernelContext();
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <>
      <div className='z-90 select-none w-full h-[26px] backdrop-blur-md bg-black/15 px-2 flex text-white items-center'>
        <div className='h-[100%] w-[60%] flex items-center'>
          <div onClick={() => setShowMenu(!showMenu)} className={`h-[100%] w-[4%] ${showMenu && 'bg-black/30'} flex items-center justify-center`}>
            <img className='w-6 h-6' src="/icons/apple.png" alt="apple menu" />
          </div>
          <h6 className='font-bold text-[9pt] ml-[6px] tracking-tight'>Finder</h6>
        </div>

        <div className='w-[40%] h-full flex gap-4 justify-end items-center text-[11px]'>
          <FaBluetoothB title='Bluetooth' className='hover:cursor-pointer w-4 h-4' />
          <h1 title='User Account' className='hover:cursor-pointer'>Guest</h1>
          <div title="Battery" className='flex items-center gap-1 hover:cursor-pointer'>
            <h1>100%</h1>
            <IoBatteryCharging className='w-5 h-5' />
          </div>
          <IoIosWifi title='Wi-Fi' className='hover:cursor-pointer w-4 h-4' />
          <IoSearch title='Spotlight Search' className='hover:cursor-pointer w-3.5 h-3.5' />
          <img title='Control Center' src="/icons/cc.png" className='w-[10px] h-2.5 hover:cursor-pointer' alt="" />
          {!isfullscreen
            ? <LuFullscreen onClick={enterFullscreen} title="Enter Fullscreen" className='w-4 h-4 hover:cursor-pointer' />
            : <MdOutlineFullscreenExit onClick={exitFullscreen} title="Exit Fullscreen" className='w-4 h-4 hover:cursor-pointer' />}

          <div title='Date & Time' className='flex gap-2 text-end leading-[0.9] text-[12px] hover:cursor-pointer'>
            <span>{formatDate(dateTime)}</span>
            <span>{formatTime(dateTime)}</span>
          </div>
        </div>
      </div>

      {/* Apple Dropdown */}
      {showMenu && <AppleMenuDropdown onClick={() => setShowMenu(!showMenu)} onClose={() => setShowMenu(false)} />}
    </>
  );
};

export default Menubar;
