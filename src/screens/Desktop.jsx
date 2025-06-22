import React from 'react'
import Menubar from '../components/Menubar'
import Dock from '../components/Dock'

const Desktop = () => {
  return (
    <div className='bg-black w-full min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat bg-fixed animate-fadeInDesktop' style={{ backgroundImage: "url('/wallpapers/SequoiaLight.jpg')" }}>
      <Menubar/>
      <div></div>
      <Dock />
    </div>
  )
}

export default Desktop
