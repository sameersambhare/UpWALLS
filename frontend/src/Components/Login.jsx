import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div style={{ background: " rgb(56,84,74) linear-gradient(0deg, rgba(56,84,74,1) 0%, rgba(0,0,0,1) 72%)" }} className='w-full h-screen text-white flex justify-center items-center'>
            <div className="w-[50%] py-[4vw] bg-[#4f4f4f4e] items-center flex flex-col px-[4vw] rounded-xl gap-[1.5vw]">
                <h1 className='text-[2.2vw] font-semibold'>Sign In!</h1>
                <p className='text-[1.2vw] text-[#6C6C6C]'>Enter your valid credentials</p>
                <div className="w-full">
                    <input type="text" id='email' placeholder='Email' className='rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white' />
                </div>
                <div className="w-full">
                    <input type="password" id='password' placeholder='Password' className='rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white' />
                </div>
                <div className="w-full justify-center items-center flex">
                    <button className='border-[0.1vw] px-[1.5vw] py-[0.4vw] rounded-lg hover:bg-white font-bold hover:text-zinc-700'>Log In</button>
                </div>
                <div className="w-full justify-center flex items-center">
                <p className='text-[1.2vw] text-[#6C6C6C]'>Not a member, <Link to="/register" className='hover:text-white decoration-[#6C6C6C] underline underline-offset-1'>Register</Link> now.</p>
                </div>
            </div>
        </div>
    )
}

export default Login