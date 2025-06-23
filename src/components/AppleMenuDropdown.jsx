import React, { useEffect, useRef } from 'react';
import { useAppContext } from '../context/AppContext'
import { useKernelContext } from '../context/kernelContext'

const AppleMenuDropdown = ({ onClose }) => {
  const menuRef = useRef();
  const { openAboutthismac } = useAppContext();
  const { setShowMenu } = useKernelContext();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className="absolute px-2 py-1 top-[24px] left-[8px] w-[240px] bg-white/60 font-semibold text-black text-xs rounded-xl backdrop-blur-lg shadow-lg border border-black/10 z-50 animate-menu"
    >
      <ul>
        <li onClick={()=>{setShowMenu(false);openAboutthismac()}} className="hover:bg-[#1559C0] hover:text-white mx-2 hover:px-2 hover:mx-0 py-2 cursor-pointer hover:rounded-lg border-b-[0.2px] border-black">About This Mac</li>
        <li className="hover:bg-[#1559C0] hover:text-white mx-2 hover:px-2 py-2 hover:mx-0 cursor-pointer rounded-lg">System Settings...</li>
        <li className="hover:bg-[#1559C0] hover:text-white mx-2 hover:px-2 py-2 hover:mx-0 cursor-pointer hover:rounded-lg border-b-[0.2px] border-black">App Store...</li>
        <li className="hover:bg-[#1559C0] hover:text-white mx-2 hover:px-2 py-2 hover:mx-0 cursor-pointer hover:rounded-lg border-b-[0.2px] border-black">Recent Items</li>
        <li className="hover:bg-[#1559C0] hover:text-white mx-2 hover:px-2 py-2 hover:mx-0 cursor-pointer hover:rounded-lg border-b-[0.2px] border-black">Force Quit</li>
        <li className="hover:bg-[#1559C0] hover:text-white mx-2 hover:px-2 py-2 hover:mx-0 cursor-pointer rounded-lg">Sleep</li>
        <li className="hover:bg-[#1559C0] hover:text-white mx-2 hover:px-2 py-2 hover:mx-0 cursor-pointer hover:rounded-lg border-b-[0.2px] border-black">Restart...</li>
        <li className="hover:bg-[#1559C0] hover:text-white mx-2 hover:px-2 py-2 hover:mx-0 cursor-pointer rounded-lg">Shut Down...</li>
        <li className="hover:bg-[#1559C0] hover:text-white mx-2 hover:px-2 py-2 hover:mx-0 cursor-pointer rounded-lg">Log Out</li>
      </ul>
    </div>
  );
};

export default AppleMenuDropdown;
