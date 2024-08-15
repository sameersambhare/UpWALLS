import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Wallpapers from './Components/Wallpapers'
import About from './Components/About'
import Landing2 from './Components/Landing2'
import Footer from './Components/Footer'
import Landing3 from './Components/Landing3'
const App = () => {
  return (
    <div className='w-full bg-black h-screen relative overflow-x-hidden'>
      <Navbar/>
      <div className="w-full h-[3.2vw] bg-black"></div>
      <Landing/>
      <Wallpapers/>
      <About/>
      <Landing2/>
      <Landing3/>
      <Footer/>
    </div>
  )
}

export default App