import { useKernelContext } from '../context/kernelContext';

const PowerScreen = () => {
  const { setIsBooting, setisPowerOn } = useKernelContext();

  const handlePowerOn = () => {
    setisPowerOn(true);
    setIsBooting(true);
  };

  return (
    <div className="w-full h-screen text-white font-semibold bg-black flex flex-col items-center justify-center">
      <button
        onClick={handlePowerOn}
        className="w-16 h-16 rounded-full flex flex-col items-center justify-center"
      >
        <img className='rounded-full' src='/power.png' alt='failed to load power button' />
      </button>
      <h6 className='sf-pro text-lg tracking-tighter font-normal mt-8'>Click to Start macOS</h6>
    </div>
  );
};

export default PowerScreen;
