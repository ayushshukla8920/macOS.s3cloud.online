import React from 'react';
import { useKernelContext } from './context/kernelContext';
import PowerScreen from './components/PowerScreen';
import BootScreen from './components/BootScreen';

const App = () => {
  const { isBooting, isPowerOn } = useKernelContext();

  return (
    <div>
      {(!isBooting && !isPowerOn) ? <PowerScreen /> : ((isPowerOn && isBooting)? <BootScreen /> : 
      <div>
        
      </div>)}
    </div>
  );
};

export default App;
