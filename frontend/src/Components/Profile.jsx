import React, { useEffect, useState } from 'react'
import { FaHatCowboy } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";

const AuthorizedPage = ({ user,token }) => {
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [location, setLocation] = useState("")
  const updateUser = () => {
    fetch('http://localhost:5000/update-profile', {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        email,
        mobile,
        location
      })
    }).then(res => res.json()).then(data => { console.log(data) }).catch((err) => { console.log(err) })
  }
  return (
    <div className='w-full h-[93vh] bg-black text-white items-center justify-center flex flex-col'>
      <div className="profile-box w-[80%] flex rounded-xl overflow-hidden border-[0.1vw] h-[80%] justify-between items-center">
        <div className="profile-preview w-[30%] h-full gap-[2vw] bg-zinc-950 justify-center flex flex-col items-center">
          <div className="profile-pic w-[8vw] h-[8vw] rounded-full bg-white relative">
            < FaCamera className='text-[3vw] text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
          </div>
          <div className="profile-data">
            <div className=" w-full flex items-center gap-[0.5vw]">
              <FaHatCowboy />
              <p className='text-[1.2vw]'>{user.name}</p>
            </div>
            <div className="w-full flex items-center gap-[0.5vw]">
              <IoLocationSharp />
              <p className='text-[1.2vw]'>{"India" || user.location}</p>
            </div>
          </div>
        </div>
        <div className="profile-details text-[1.1vw] w-[70%] text-black h-full items-center justify-center  gap-[1vw] flex flex-col px-[10vw]">
          <h1 className='text-[2.5vw] font-semibold text-white pb-[2vw]'>Welcome {user.name},</h1>
          <div className="Email w-full flex items-center gap-[1vw]">
            <p className='text-white'>Email:</p>
            <input type="email" placeholder='user@gmail.com' value={user.email || email} onChange={(e) => { setEmail(e.target.value) }} className='w-full py-[0.5vw] px-[1vw] rounded-lg' />
          </div>
          <div className="Email w-full flex items-center gap-[1vw]">
            <p className='text-white'>Mobile:</p>
            <input type="text" placeholder='Mobile' value={user.mobile || mobile} onChange={(e) => { setMobile(e.target.value) }} className='w-full py-[0.5vw] px-[1vw] rounded-lg' />
          </div>
          <div className="Email w-full flex items-center gap-[1vw]">
            <p className='text-white'>Location:</p>
            <input type="text" placeholder='Location' value={user.location || location} onChange={(e) => { setLocation(e.target.value) }} className='w-full py-[0.5vw] px-[1vw] rounded-lg' />
          </div>
          <div className="w-full flex justify-center items-center pt-[2vw]">
            <button className='text-[1vw] py-[0.5vw] px-[2vw] bg-white rounded-lg text-black' onClick={() => { updateUser() }}>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const UnauthorizedPage = () => {
  return (
    <div className="w-full h-[93vh] flex-col text-white bg-black items-center justify-center flex">
      <h1 className='text-[8vw] font-semibold uppercase tracking-tight'>401 Unauthorized</h1>
      <p className='text-[2vw]'>Login is required.</p>
    </div>
  )
}

const Profile = () => {
  const [user, setUser] = useState("")
  const [token, setToken] = useState('')
  const [authorize, setAuthorize] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('Token');
    setToken(token)
    const localUser = JSON.parse(localStorage.getItem('localUser'))
    console.log(localUser)
    if (localUser) {
      setAuthorize(true)
      setUser(localUser)
    }
  }, [])
  return (
    authorize ? <AuthorizedPage user={user} token={token} /> : <UnauthorizedPage />
  )
}

export default Profile