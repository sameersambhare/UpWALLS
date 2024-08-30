import React from 'react'
import Banner3 from '../assets/Banner3.png'
import bannerimg from '../assets/bannerimg.png'
const Landing3 = () => {
    const bannerStyle = { background: "#4A2262 radial-gradient(circle farthest-side at bottom center, #54276F 0%, #000000 100%)" }
    return (
        <div style={bannerStyle} className="w-full h-screen flex items-center flex-col">
            <div className="w-[75%] py-[4vw]">
                <p className="text-white text-[3.5vw] leading-none font-['twk_everett']">Get premium wallpapers fast, save time, and personalize your devices with ease.</p>
            </div>
            <div className='w-full px-[4vw] gap-[2vw] flex items-center justify-evenly'>
                <div className="bg-[#4a4a4a6a] text-white rounded-lg px-[1vw] py-[2vw]">
                    <div className="logo w-[4vw] h-[4vw] my-[1vw] overflow-hidden rounded-full">
                        <img src={bannerimg} alt="" className='w-full object-cover' />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione blanditiis vitae deleniti impedit. Sit debitis vero officia eius recusandae obcaecati dolores modi earum dolorum adipisci, maxime hic aperiam tenetur consequuntur animi nobis? Dignissimos officia quis id, ea eius consequuntur.</p>
                    <p className='pt-[2vw]'>Sameer Sambhare</p>
                    <p>PCCOE, Computer Department</p>

                </div>
                <div className="bg-[#4a4a4a6a] text-white rounded-lg px-[1vw] py-[2vw]">
                    <div className="logo w-[4vw] h-[4vw] my-[1vw] overflow-hidden rounded-full">
                        <img src={bannerimg} alt="" className='w-full object-cover' />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione blanditiis vitae deleniti impedit. Sit debitis vero officia eius recusandae obcaecati dolores modi earum dolorum adipisci, maxime hic aperiam tenetur consequuntur animi nobis? Dignissimos officia quis id, ea eius consequuntur.</p>
                    <p className='pt-[2vw]'>Sameer Sambhare</p>
                    <p>PCCOE, Computer Department</p>
                </div>
                <div className="bg-[#4a4a4a6a] text-white rounded-lg px-[1vw] py-[2vw]">
                    <div className="logo w-[4vw] h-[4vw] my-[1vw] overflow-hidden rounded-full">
                        <img src={bannerimg} alt="" className='w-full object-cover' />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione blanditiis vitae deleniti impedit. Sit debitis vero officia eius recusandae obcaecati dolores modi earum dolorum adipisci, maxime hic aperiam tenetur consequuntur animi nobis? Dignissimos officia quis id, ea eius consequuntur.</p>
                    <p className='pt-[2vw]'>Sameer Sambhare</p>
                    <p>PCCOE, Computer Department</p>
                </div>
                <div className="bg-[#4a4a4a6a] text-white rounded-lg px-[1vw] py-[2vw]">
                    <div className="logo w-[4vw] h-[4vw] my-[1vw] overflow-hidden rounded-full">
                        <img src={bannerimg} alt="" className='w-full object-cover' />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione blanditiis vitae deleniti impedit. Sit debitis vero officia eius recusandae obcaecati dolores modi earum dolorum adipisci, maxime hic aperiam tenetur consequuntur animi nobis? Dignissimos officia quis id, ea eius consequuntur.</p>
                    <p className='pt-[2vw]'>Sameer Sambhare</p>
                    <p>PCCOE, Computer Department</p>
                </div>
            </div>
        </div>
    )
}

export default Landing3