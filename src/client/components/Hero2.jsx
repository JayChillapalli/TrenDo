import React from 'react'
import { slides,  } from '../assets/assets'

const Hero2 = () => {
    return (
        <div className=' flex flex-col md:flex-row gap-2 justify-evenly items-center md:justify-center  text-white  bg-gradient-to-r from-neutral-800 via-gray-800 to-neutral-800 w-full h-screen'>
            <div className='px-10 gap-5 flex flex-col py-5'>
                <p className='text-3xl'>ƬΣMPӨЯΛ</p>
                <p className='font-semibold poppins-medium-italic  md:text-xl'>Time is priceless — wear it well.</p>
                <p className='text-sm hidden md:flex poppins-medium'>Crafted for moments that matter.
                    Designed to define your time.</p>
                <div className='w-full hidden md:flex  items-center text-center p-2'>
                    <button className='hover:bg-gradient-to-l hover:from-neutral-600 hover:via-gray-900 hover:to-neutral-600 text-sm poppins-medium capitalize text-slate-50 bg-gradient-to-r from-gray-700 via-neutral-800 to-gray-700 w-full px-4 py-2 rounded'>buy now</button>
                </div>
            </div>
            <div className='w-2/3 md:w-auto  md:h-2/3 overflow-hidden'>
                <img className='w-full h-full object-contain' src={slides.h3} alt="" />
            </div>
            <div className='w-full md:hidden  items-center text-center p-2'>
                <button className=' text-sm poppins-medium capitalize text-slate-50 bg-gradient-to-r from-gray-700 via-neutral-800 to-gray-700 w-1/2 px-4 py-2 rounded'>buy now</button>
            </div>

        </div>
    )
}

export default Hero2