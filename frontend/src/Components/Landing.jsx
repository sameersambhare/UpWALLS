import React from 'react'
import heading1 from '../assets/heading1.png'
const Landing = () => {
  return (
    <div className="bg-black py-[4vw] w-full h-screen items-center flex flex-col font-['apercu_pro']">
      <div className="w-[60%] text-center">
        <h1 style={{backgroundImage:`url(${heading1})`,backgroundPosition:"center",backgroundSize:"cover"}} className="mb-[1vw] font-['twk_everett'] text-transparent text-[4vw] tracking-tight leading-none font-bold bg-clip-text">Meet UpWalls. A better way to customise mobile wallpapers.</h1>
        <p className="text-[#707070] text-[1.8vw]">Your Ultimate Destination for Stunning Wallpapers</p>
      </div>
    </div>
  )
}

export default Landing