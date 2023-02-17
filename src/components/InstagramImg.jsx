import Image from 'next/image'
import React from 'react'
//import socialImg from '/ig-img-1.jpeg'
import {FaInstagram} from 'react-icons/fa'

const InstagramImg = (socialImg) => {
  return (
    <div>
    <div className="relative">
        <Image src='/ig-img-1.jpeg' alt ='/' className='w-full h-full' layout='responsive' 
          width={100}
          height={100}
          priority />
          <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 group'>
          <p className='text-gray-300 hidden group-hover:block'> <FaInstagram size={35} className='z-10' /></p>
          </div>
    </div>
    <div className="relative">
        <Image src='/ig-img-2.jpeg' alt ='/' className='w-full h-full' layout='responsive' 
          width={100}
          height={100}
          priority />
          <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 group'>
          <p className='text-gray-300 hidden group-hover:block'> <FaInstagram size={35} className='z-10' /></p>
          </div>
    </div>
    </div>
  )
}

export default InstagramImg