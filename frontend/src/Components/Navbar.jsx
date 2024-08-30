import React, { useState } from 'react'
import { navMenu } from '../Constants/constant'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    const [iteme, setItem] = useState(0)
    const [active, setActive] = useState();
    const navStyle = {
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
    }
    const success = (msg) => {
        toast.success(msg)
    }
    const error = (msg) => {
        toast.error(msg)
    }
    const submit = () => {
        let token = localStorage.getItem('Token')
        console.log(token)
        if (!token) {
            error('Login is required')
        }
        else {
            navigate('/profile')
        }
    }
    return (
        <div>
            <div style={navStyle} className="w-full z-[999] bg-[#00000077] fixed py-[0.5vw] px-[3vw] font-['inter'] flex items-center justify-between text-[#6A6A6A]">
                <div className="logo">
                    <Link to='/'><h1 className='px-[1vw] py-[0.2vw] text-[1.2vw] font-bold text-white cursor-pointer'>UpWALLS</h1></Link>
                </div>
                <ul className='flex items-center gap-[0.5vw] text-[0.9vw] font-semibold'>
                    {navMenu.map((item, index) => (
                        <Link to={item.url}><li key={index} onMouseLeave={() => { setItem(0) }} onMouseEnter={() => { setItem(index) }} onClick={() => { setActive(index) }} className={`${iteme === index && "bg-[#1a1a1aaf] text-[#ffffffbe] duration-[0.3s]"} cursor-pointer rounded-md px-[0.6vw] py-[0.14vw]`}>{item.id}</li></Link>
                    ))}
                </ul>
                <div className="buttons">
                    <ul className='flex gap-[1vw] items-center text-[0.9vw]'>
                        <Link to='/register'><li className='text-white font-semibold hover:bg-white hover:text-black border-[0.1vw] px-[1vw] py-[0.4vw] cursor-pointer rounded-lg'>Register</li>
                        </Link>
                        <Link to='/login'>
                            <li className='bg-[#17FEA6] text-[#212A26] font-semibold px-[1vw] py-[0.4vw] rounded-lg cursor-pointer'>Log In</li>
                        </Link>
                        <li className='text-white font-semibold hover:bg-white hover:text-black border-[0.1vw] px-[1vw] py-[0.4vw] cursor-pointer rounded-lg' onClick={() => { submit() }}>Submit-Image</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar