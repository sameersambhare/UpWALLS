import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Regsiter = () => {
    const bgStyle = {
        background: "rgb(62,63,98) linear-gradient(0deg, rgba(62,63,98,1) 0%, rgba(0,0,0,1) 72%)"
    }
    return (
        <div style={bgStyle} className='w-full h-screen text-white flex justify-center items-center'>
            <div className="w-[50%] py-[4vw] bg-[#4f4f4f4e] items-center flex flex-col px-[4vw] rounded-xl gap-[1.5vw]">
                <h1 className='text-[2.2vw] font-semibold'>Create Account!</h1>
                <p className='text-[1.2vw] text-[#6C6C6C]'>Already have an account, <Link to="/login" className='hover:text-white decoration-[#6C6C6C] underline underline-offset-1'>Login</Link> now.</p>
                <div className="w-full">
                    <input type="text" id='email' placeholder='Email' className='rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white' />
                </div>
                <div className="w-full">
                    <input type="text" id='name' placeholder='Fullname' className='rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white' />
                </div>
                <div className="w-full">
                    <input
                        type="number"
                        id="number"
                        placeholder="Mobile"
                        style={{
                            appearance: 'textfield',
                            WebkitAppearance: 'none',
                            MozAppearance: 'textfield',
                        }}
                        className="rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white"
                        min="0"  // Minimum value
                        max="10" // Maximum value
                    />
                    <style>
                        {`
          input[type=number]::-webkit-inner-spin-button,
          input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          input[type=number] {
            -moz-appearance: textfield;
            appearance: textfield;
          }
        `}
                    </style>
                </div>
                <div className="w-full">
                    <input type="password" id='password' placeholder='Password' className='rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white' />
                </div>
                <div className="w-full justify-center items-center flex">
                    <button className='border-[0.1vw] px-[1.5vw] py-[0.4vw] rounded-lg hover:bg-white font-bold hover:text-zinc-700'>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Regsiter