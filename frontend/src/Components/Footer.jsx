import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    let currentDate = new Date()
    let year = currentDate.getFullYear()
    console.log(year)
    return (
        <div className="text-[#4A4A4A] items-center flex flex-col">
            <div className='w-full py-[4vw] flex justify-around'>
                <div className="">
                    <p className='text-white pb-[2vw]'>Product</p>
                    <ul>
                        <li className='cursor-pointer'>Blog</li>
                        <li className='cursor-pointer'>Learn</li>
                        <li className='cursor-pointer'>Pricing</li>
                        <li className='cursor-pointer'>Download</li>
                    </ul>
                </div>
                <div className="">
                    <p className='text-white pb-[2vw]'>Product</p>
                    <ul>
                        <li className='cursor-pointer'>Blog</li>
                        <li className='cursor-pointer'>Learn</li>
                        <li className='cursor-pointer'>Pricing</li>
                        <li className='cursor-pointer'>Download</li>
                    </ul>
                </div>
                <div className="">
                    <p className='text-white pb-[2vw]'>Product</p>
                    <ul>
                        <li className='cursor-pointer'>Blog</li>
                        <li className='cursor-pointer'>Learn</li>
                        <li className='cursor-pointer'>Pricing</li>
                        <li className='cursor-pointer'>Download</li>
                    </ul>
                </div>
                <div className="">
                    <p className='text-white pb-[2vw]'>Product</p>
                    <ul>
                        <li className='cursor-pointer'>Blog</li>
                        <li className='cursor-pointer'>Learn</li>
                        <li className='cursor-pointer'>Pricing</li>
                        <li className='cursor-pointer'>Download</li>
                    </ul>
                </div>
                <div className="">
                    <p className='text-white pb-[2vw]'>Product</p>
                    <ul>
                        <li className='cursor-pointer'>Blog</li>
                        <li className='cursor-pointer'>Learn</li>
                        <li className='cursor-pointer'>Pricing</li>
                        <li className='cursor-pointer'>Download</li>
                    </ul>
                </div>
                <div className="">
                    <p className='text-white pb-[2vw]'>Contact</p>
                    <p>support@createwithplay.com</p>
                    <div className="flex gap-[1vw] pt-[1vw] text-[1.7vw]">
                        <FaTwitter className='cursor-pointer' />
                        <FaYoutube className='cursor-pointer' />
                        <RiInstagramFill className='cursor-pointer' />
                        <FaLinkedin className='cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className="w-[75%] py-[3vw] flex justify-center items-center border-t-[0.1vw] border-[#4A4A4A]">
                <p className='text-[1.1vw]'>{year} UpWALLS</p>
            </div>
        </div>

    )
}

export default Footer