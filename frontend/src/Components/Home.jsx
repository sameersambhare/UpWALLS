import React from 'react'
import Landing from './Landing'
import Wallpapers from './Wallpapers'
import About from './About'
import Landing2 from './Landing2'
import Footer from './Footer'
import Landing3 from './Landing3'
import WallpaperTxt from './WallpaperTxt'
const Home = () => {
  return (
    <div className='w-full min-h-screen relative overflow-x-hidden'>
      <Landing />
      <WallpaperTxt/>
      <Wallpapers />
      <Landing2 />
      <Landing3 />
      <Footer />
    </div>
  )
}

export default Home