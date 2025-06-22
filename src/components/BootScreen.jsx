import React, { useEffect } from 'react';
import { useKernelContext } from '../context/kernelContext';

const BootScreen = () => {
  const { setIsBooting, bootmacOS } = useKernelContext();

  useEffect(() => {
    const audio = new Audio('/bootChime.mp3');
    audio.play();
    bootmacOS();
  }, []);

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-end">
      <div className='h-[55%] flex items-end'>
        <img src="/boot.png" alt="Apple" className="w-15 h-15 animate-fadeIn" />
      </div>
      <div className='h-[45%] flex items-end'>
        <div className="border-[0.00001px] border-[#646464] w-25 h-[2.2px] bg-gray-600 rounded overflow-hidden mb-[25%]">
          <div className="h-full bg-white animate-fillProgress" />
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
