import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { IoClose, IoSearch } from "react-icons/io5";
import { useAppContext } from '../context/AppContext';

const Safari = () => {
  const { closeSafari } = useAppContext();
  const nodeRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [url, setUrl] = useState(null);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      openURL(inputValue);
    }
  };

  const openURL = (inputUrl) => {
    console.log('Navigating to:', inputUrl);
    const formatted = inputUrl.replace(/ /g, "+");
    const navigateto = `https://www.google.com/search?q=${formatted}&igu=1`
    setUrl(navigateto);
  };

  return (
    <Draggable
      handle=".drag-handle"
      cancel=".no-drag, input, button, .webview"
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className="absolute w-full mt-[26px] h-[85.5vh] bg-white/60 text-black text-xs rounded-xl backdrop-blur-lg shadow-lg border border-black/10 z-20"
      >
        {/* Top Bar */}
        <div className="w-full h-[7%] flex items-center gap-2 px-4 py-1">
          {/* Window Buttons */}
          <div onClick={closeSafari} className='rounded-full w-[12px] h-[12px] bg-[#FF5F57] border border-red-500 flex justify-center items-center text-[#FF5F57] hover:text-red-900'>
            <IoClose className='h-[13px] w-[13px] font-bold' />
          </div>
          <div className='rounded-full w-[12px] h-[12px] bg-[#FEBC2E] border border-yellow-500'></div>
          <div className='rounded-full w-[12px] h-[12px] bg-[#28C840] border border-green-500'></div>

          {/* Spacer (Drag Area) */}
          <div className="drag-handle w-[10%] h-full cursor-move"></div>

          {/* Input */}
          <div className="relative w-[70%]">
            <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none" />
            <input
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={handleKeyDown}
              className="bg-white/30 text-sm pl-8 pr-3 py-1 rounded-sm border border-black/10 outline-none w-full"
            />
            {/* Floating Placeholder */}
            {!inputValue && (
              <span
                className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-gray-400 text-sm transition-all duration-200 pointer-events-none
                  ${isFocused ? 'left-8 translate-x-0 text-xs top-1.5' : ''}
                `}
              >
                Search or enter website name
              </span>
            )}
          </div>

          <h1 className='hover:cursor-pointer text-xl'>+</h1>
        </div>

        {/* Web View Area */}
        <div draggable={false} className='w-full h-full rounded-b-xl overflow-clip'>
          <iframe
          is="x-frame-bypass"
          src={url}
          className="w-full h-[93%]"
        ></iframe>
        </div>
      </div>
    </Draggable>
  );
};

export default Safari;
