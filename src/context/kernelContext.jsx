import { createContext, useContext, useEffect, useState } from 'react';

const KernelContext = createContext();

export const KernelProvider = ({ children }) => {
  const [isBooting, setIsBooting] = useState(false);
  const [isPowerOn, setisPowerOn] = useState(false);
  const [isfullscreen, setisfullscreen] = useState(false);
  const [showAppleMenu, setShowAppleMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [docksize, setdocksize] = useState({
    "main": {
      "pt": 8,
      "px": 16,
      "pb": 4,
      "rounded": 16,
      "gap": 12
    },
    "icon": {
      "w": 50,
      "h": 50,
      "mb": 8
    },
    "dot": {
      "w": 4,
      "h": 4,
      "bottom": -2
    },
    "divider": {
      "w": 1,
      "h": 56,
      "mx": 8,
      "mb": 4
    },
    "tooltip": {
      "bottom": 70,
      "text": 10,
      "px": 8,
      "py": 4
    }
  })

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
    <KernelContext.Provider value={{ showMenu, setShowMenu, isBooting, setIsBooting, bootmacOS, isPowerOn, setisPowerOn, enterFullscreen, exitFullscreen, isfullscreen, docksize, setdocksize }}>
      {children}
    </KernelContext.Provider>
  );
};

export const useKernelContext = () => useContext(KernelContext);
