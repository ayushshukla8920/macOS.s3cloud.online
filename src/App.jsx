import React from 'react';
import { useKernelContext } from './context/kernelContext';
import PowerScreen from './components/PowerScreen';
import BootScreen from './components/BootScreen';
import Desktop from './screens/Desktop';

const App = () => {
  const { isBooting, isPowerOn } = useKernelContext();

  return (
    <div>
      {(!isBooting && !isPowerOn) ? <PowerScreen /> : ((isPowerOn && isBooting)? <BootScreen /> : <Desktop />)}
    </div>
  );
};

export default App;
