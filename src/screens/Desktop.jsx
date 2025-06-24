import React from 'react'
import Menubar from '../components/Menubar'
import Dock from '../components/Dock'
import AboutThisMac from '../Apps/AboutThisMac'
import Safari from '../Apps/Safari'
import { useAppContext } from '../context/AppContext'

const Desktop = () => {
  const { aboutmacopen, safariopen } = useAppContext();
  return (
    <div className='bg-black w-full min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat bg-fixed animate-fadeInDesktop' style={{ backgroundImage: "url('/wallpapers/SequoiaLight.jpg')" }}>
      <Menubar/>
      <div></div>
      <Dock />
      {aboutmacopen && <AboutThisMac />}
      {safariopen && <Safari />}
    </div>
  )
}

export default Desktop
