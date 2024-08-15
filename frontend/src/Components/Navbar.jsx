import React, { useState } from 'react'
import { navMenu } from '../Constants/constant'
const Navbar = () => {
    const [iteme, setItem] = useState(0)
    const navStyle = {
        background: 'rgba(255, 255, 255, 0)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
    }
    return (
        <div>
            <div style={navStyle} className="w-full fixed py-[0.5vw] px-[3vw] font-['inter'] bg- flex items-center justify-between text-[#6A6A6A]">
                <div className="logo">
                    <h1 className='bg-black rounded-sm px-[1vw] py-[0.2vw] text-[1.2vw] font-bold text-white cursor-pointer'>UpWALLS</h1>
                </div>
                <ul className='flex items-center gap-[2vw] text-[0.9vw] font-semibold'>
                    {navMenu.map((item, index) => (
                        <li key={index} onMouseLeave={() => { setItem(0) }} onMouseEnter={() => { setItem(index) }} className={`${iteme == index && "bg-[#1A1A1A] text-white"} cursor-pointer rounded-lg px-[0.5vw] py-[0.1vw]`}>{item.id}</li>
                    ))}
                </ul>
                <div className="buttons">
                    <ul className='flex gap-[1vw] items-center text-[0.9vw]'>
                        <li className='text-white bg-black font-semibold hover:bg-white hover:text-black border-[0.1vw] px-[1vw] py-[0.4vw] cursor-pointer rounded-lg'>Register</li>
                        <li className='bg-[#17FEA6] text-[#212A26] font-semibold px-[1vw] py-[0.4vw] rounded-lg cursor-pointer'>Log In</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar