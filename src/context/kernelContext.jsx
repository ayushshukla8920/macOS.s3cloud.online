import { createContext, useContext, useEffect, useState } from 'react';

const KernelContext = createContext();

export const KernelProvider = ({ children }) => {
  const [isBooting, setIsBooting] = useState(false);
  const [isPowerOn, setisPowerOn] = useState(false);
  const [isfullscreen, setisfullscreen] = useState(false);

  useEffect(() => {
    const handler = () => setisfullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);
  
  const bootmacOS = ()=>{
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 3000);
    return () => clearTimeout(timer);
  }

  const enterFullscreen = () => {
    setisfullscreen(true);
    const docEl = document.documentElement;
    if (docEl.requestFullscreen) {
      docEl.requestFullscreen();
    } else if (docEl.webkitRequestFullscreen) {
      docEl.webkitRequestFullscreen();
    } else if (docEl.msRequestFullscreen) {
      docEl.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    setisfullscreen(false);
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  return (
    <KernelContext.Provider value={{ isBooting, setIsBooting, bootmacOS, isPowerOn, setisPowerOn, enterFullscreen, exitFullscreen, isfullscreen }}>
      {children}
    </KernelContext.Provider>
  );
};

export const useKernelContext = () => useContext(KernelContext);
