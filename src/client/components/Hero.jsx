import React from 'react'
import { hero } from '../assets/assets'
import { slides } from '../assets/assets'


const Hero = () => {
    return (
        <div className='bg-teal-900 mt-3 md:flex-row md:items-center md:justify-center flex-col text-white  overflow-hidden flex w-full h-screen'>
            <div className='p-4 z-30 '>
                <div className='flex size-20 items-center uppercase'>
                    <img className='  invert-100 size-10' src={hero.a2} alt="" />
                    <p className=' translate-x-8 absolute text-xl'>elburum</p>
                </div>
                <div className='z-50 px-1'>
                    <p className='lg:text-4xl text-2xl font- uppercase font-mono'>maximum comfort & style</p>
                    <p className='text-sm font-sans'>Elevate your style. Redefine your world.</p>
                    <div className='w-full hidden h-auto md:flex  items-center mt-4'>
                        <button className='font-semibold p-2 rounded text-[12px] bg-[#D8F49A] hover:bg-[#cdf37a] cursor-pointer text-black capitalize w-[80%]'>Add to cart</button>
                    </div>
                </div>
            </div>

            <div className=' z-30 h-1/2 md:h-full md: -top-10 overflow-hidden'>
                <img className='object-contain w-full h-full' src={slides.h2} alt="" />
            </div>
            <div className='w-full md:hidden z-40 h-auto flex justify-center items-center mt-4'>
                <button className='font-semibold p-2 rounded text-[12px] bg-[#D8F49A] hover:bg-[#cdf37a] cursor-pointer text-black capitalize w-[80%]'>Add to cart</button>
            </div>

            <div className='w-full z-0 h-full absolute '>
                <img className=' w-full h-full invert mix-blend-soft-light opacity-10 object-cover z-0' src={hero.a1} alt="image" />
            </div>
        </div>
    )
}

export default Hero