import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
const Regsiter = () => {
    const navigate = useNavigate()
    const bgStyle = {
        background: "#0E2662 radial-gradient(circle farthest-side at bottom center, #0E2662 0%, #000000 100%)"

    }
    const success = (msg) => {
        toast.success(msg)
    }
    const error = (msg) => {
        toast.error(msg)
    }
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const postDetails = () => {
        fetch('http://localhost:5000/register', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                name,
                mobile,
                password
            })
        }).then(res => res.json()).then((data) => {
            if (data.error) {
                error(data.error)
            }
            else {
                success(data.message)
                navigate('/profile')
            }
        }).catch((err) => console.log(err))
    }
    return (
        <div style={bgStyle} className='w-full h-screen text-white flex justify-center items-center'>
            <div className="w-[50%] py-[4vw] bg-[#4f4f4f4e] items-center flex flex-col px-[4vw] rounded-xl gap-[1.5vw]">
                <h1 className='text-[2.2vw] font-semibold'>Create Account!</h1>
                <p className='text-[1.2vw] text-[#6C6C6C]'>Already have an account, <Link to="/login" className='hover:text-white decoration-[#6C6C6C] underline underline-offset-1'>Login</Link> now.</p>
                <div className="w-full">
                    <input type="text" id='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' className='rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white' />
                </div>
                <div className="w-full">
                    <input type="text" id='name' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Fullname' className='rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white' />
                </div>
                <div className="w-full">
                    <input
                        type="number"
                        id="number"
                        value={mobile}
                        onChange={(e) => { setMobile(e.target.value) }}
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
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} id='password' placeholder='Password' className='rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white' />
                </div>
                <div className="w-full justify-center items-center flex">
                    <button onClick={() => { postDetails() }} className='border-[0.1vw] px-[1.5vw] py-[0.4vw] rounded-lg hover:bg-white font-bold hover:text-zinc-700'>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Regsiter