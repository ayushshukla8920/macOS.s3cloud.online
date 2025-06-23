import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { IoClose } from "react-icons/io5";
import { useAppContext } from '../context/AppContext';

const AboutThisMac = () => {
  const { closeAboutthismac } = useAppContext();
  const nodeRef = useRef(null); // ✅ nodeRef to avoid findDOMNode

  return (
    <Draggable handle=".handle" nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="handle flex flex-col items-center absolute -translate-x-1/2 -translate-y-1/2 px-2 py-1 top-[50%] left-[50%] w-[240px] h-[450px] bg-white/60 text-black text-xs rounded-xl backdrop-blur-lg shadow-lg border border-black/10 z-20"
      >
        <div className='w-full h-[40px] flex items-start mt-1 gap-2'>
          <div onClick={closeAboutthismac} className='rounded-full w-[15px] h-[15px] bg-[#FF5F57] border-[0.5px] border-red-500 flex justify-center items-center text-[#FF5F57] hover:text-red-900'>
            <IoClose className='h-[13px] w-[13px] font-bold' />
          </div>
          <div className='rounded-full w-[15px] h-[15px] bg-[#474849]/20'></div>
          <div className='rounded-full w-[15px] h-[15px] bg-[#474849]/20'></div>
        </div>

        <img draggable={false} className='h-[120px] w-[100px] mb-[10px]' src="/smbios.png" alt="mac-pro" />
        <h1 className='font-bold text-xl text-[#3F4147]'>Mac Pro</h1>
        <h1 className='font-semibold text-xs tracking-tighter text-[#9799a4]'>2022</h1>

        <div className='flex w-full justify-start items-center gap-3 mt-2'>
          <div className='w-[50%] h-full flex items-center justify-end'>Processor</div>
          <div className='w-[50%] h-full flex items-center justify-start'>Apple M2 Ultra</div>
        </div>
      </div>
    </Draggable>
  );
};

export default AboutThisMac;
