import React from 'react'
import heading2 from '../assets/heading2.png'
const Landing2 = () => {
    return (
        <div className='w-full h-screen bg-black px-[4vw] py-[4vw] flex'>
            <div className="w-[50%] mt-[4vw]">
                <h1 style={{ backgroundImage: `url(${heading2})`, backgroundPosition: "center", backgroundSize: "cover" }} className="text-transparent font-['twk_everett'] bg-clip-text text-[3.9vw] tracking-tight font-bold leading-none">UpWalls, A effortless, powerful, and perfectly tailored wallpapers.</h1>
            </div>
            <div className="w-[50%] mt-[4vw] px-[4vw] flex gap-[2vw] flex-col">
                <p className='text-[#6B6B6C] text-[1.5vw] leading-7'>More diverse than standard libraries. More customizable than generic picks. More vivid, dynamic, and tailored than both.</p>
                <p className='text-[#6B6B6C] text-[1.5vw] leading-7'>Our platform empowers you to discover and download stunning wallpapers effortlessly enhancing your device's aesthetics while making personalization a breeze.</p>
            </div>
        </div>
    )
}

export default Landing2