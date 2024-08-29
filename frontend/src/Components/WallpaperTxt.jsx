import React from 'react'
import wallpapertxt from '../assets/wallpapertxt.png'
const WallpaperTxt = () => {
  const bgStyle = {
    backgroundImage: `url(${wallpapertxt})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  }
  return (
    <div className='w-full bg-black text-center text-white flex-col py-[1vw] items-center justify-center flex'>
      <h1 style={bgStyle} className="text-[4vw] bg-clip-text text-transparent font-['Apercu_pro'] font-semibold tracking-tight">Fantastic Wallpapers For You</h1>
      <p className='text-[1.8vw] text-[#616161]'>Download the wallpaper now easily and rapidly.</p>
    </div>
  )
}

export default WallpaperTxt