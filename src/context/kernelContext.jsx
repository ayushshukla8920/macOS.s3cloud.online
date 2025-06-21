import { createContext, useContext, useState } from 'react';

const KernelContext = createContext();

export const KernelProvider = ({ children }) => {
  const [isBooting, setIsBooting] = useState(false);
  const [isPowerOn, setisPowerOn] = useState(false);
  
  const bootmacOS = ()=>{
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 3000);
    return () => clearTimeout(timer);
  }

  return (
    <KernelContext.Provider value={{ isBooting, setIsBooting, bootmacOS, isPowerOn, setisPowerOn }}>
      {children}
    </KernelContext.Provider>
  );
};

export const useKernelContext = () => useContext(KernelContext);
