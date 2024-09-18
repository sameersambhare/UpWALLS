import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
const Login = ({zIndex,bgColor}) => {
    const navigate = useNavigate()
    const success = (msg) => {
        toast.success(msg)
    }
    const error = (msg) => {
        toast.error(msg)
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const postDetails = () => {
        fetch('/login', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            })
        }).then(res => res.json()).then((data) => {
            if (data.error) {
                error(data.error)
            } else {
                success(data.message)
                navigate('/profile')
                localStorage.setItem("Token", data.token)
                localStorage.setItem("localUser", JSON.stringify(data.localUser))
            }
        })
    }
    return (
        <div style={{ background: bgColor|| "#156233 radial-gradient(circle farthest-side at bottom center, #156233 0%, #000000 100%)" }} className='w-full h-screen text-white flex justify-center items-center relative'>
            <div className={`w-[50%] py-[4vw] bg-[#4f4f4f4e] items-center flex flex-col px-[4vw] rounded-xl gap-[1.5vw] ${zIndex===99?"z-[99]":"z-0"}`}>
                <h1 className='text-[2.2vw] font-semibold'>Sign In!</h1>
                <p className='text-[1.2vw] text-[#6C6C6C]'>Enter your valid credentials</p>
                <div className="w-full">
                    <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} id='email' placeholder='Email' className='rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white' />
                </div>
                <div className="w-full">
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} id='password' placeholder='Password' className='rounded-lg w-full bg-[#4f4f4fb2] px-[1.5vw] outline-none py-[0.4vw] text-white' />
                </div>
                <div className="w-full justify-center items-center flex">
                    <button onClick={() => { postDetails() }} className='border-[0.1vw] px-[1.5vw] py-[0.4vw] rounded-lg hover:bg-white font-bold hover:text-zinc-700'>Log In</button>
                </div>
                <div className="w-full justify-center flex items-center">
                    <p className='text-[1.2vw] text-[#6C6C6C]'>Not a member, <Link to="/register" className='hover:text-white decoration-[#6C6C6C] underline underline-offset-1'>Register</Link> now.</p>
                </div>
            </div>
        </div>
    )
}

export default Login