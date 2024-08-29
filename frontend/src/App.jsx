import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Regsiter from './Components/Regsiter'
import Login from './Components/Login'
import Home from './Components/Home'
import Profile from './Components/Profile'
import {Toaster} from 'sonner'
const App = () => {
  return (
    <div className='w-full bg-black h-screen relative overflow-x-hidden'>
      <BrowserRouter>
        <Navbar />
        <div className="w-full h-[3.2vw] bg-black"></div>
        <Toaster/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Regsiter />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App