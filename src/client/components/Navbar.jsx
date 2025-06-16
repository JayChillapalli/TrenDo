import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { BsFillBellFill } from "react-icons/bs";




const Navbar = () => {
    const [nav, setNav] = useState(false)
    console.log(nav);

    return (
        <div className='text-sm   md:text-sm lg:text-base text-neutral-400'>
            <div className='relative border-b border-b-gray-100 p-2 lg:px-10 lg:py-2 font-semibold capitalize'>
                <div className='  flex justify-end md:justify-between' >
                    <div className='hidden md:flex '>
                        Download Mobile App
                    </div>
                    <div className='hidden md:flex gap-4'>
                        <Link to='/'>home</Link>
                        <Link to='/clothing'>clothing</Link>
                        <Link to='/electronics'>electronics</Link>
                        <Link to='/about'>about</Link>
                        <p className='w-0.5 h-full bg-gray-300'></p>
                        <Link className='font-bold text-black' to='/signin'>signin</Link>
                        <p className='w-0.5 h-full bg-gray-300'></p>
                        <Link className='font-bold text-black' to='/login'>login</Link>
                    </div>
                </div>
                <div className='flex justify-between md:hidden' >
                    <div className='text-2xl text-black font-mono font-semibold'>TrenDo</div>
                    <button onClick={() => setNav(true)} className='  z-10 top-0 right-0 text-2xl'> <RiMenu3Fill /></button>
                </div>
                {/* side nav  */}
                {
                    (
                        <div className={`w-full  absolute top-0 left-0 bg-white h-screen z-50 transition-all delay-300 ${!nav ? "translate-x-full hidden " : "translate-x-0  "} `}>
                            <div className=' flex justify-end p-2'>
                                <button className={`text-3xl top-0 right-0 transition-all `} onClick={() => setNav(false)}><IoCloseSharp /></button>
                            </div>
                            <div className='flex font-semibold px-6 flex-col w-full h-full justify-center items-center capitalize gap-3 group-hover:accent-fuchsia-700'>
                                <Link onClick={()=> setNav(false)} to='/'>home</Link>
                                <Link onClick={()=> setNav(false)} to='/clothing'>clothing</Link>
                                <Link onClick={()=> setNav(false)} to='/electronics'>electronics</Link>
                                <Link onClick={()=> setNav(false)} to='/about'>about</Link>
                                {/* <p className='w-1/2 h-0.5 text-gray-100 bg-gray-100'></p> */}
                                <Link onClick={()=> setNav(false)} className='bg-black mt-10 w-full p-2 rounded text-white text-center' to='/signin'>signin</Link>
                                {/* <p className='w-1/2 h-0.5 text-gray-100 bg-gray-100'></p> */}
                                <Link onClick={()=> setNav(false)} className='bg-black w-full p-2 rounded text-white text-center' to='/login'>login</Link>
                                {/* <p className='w-1/2 h-0.5 text-gray-100 bg-gray-100'></p> */}
                            </div>

                        </div>
                    )
                }
            </div>
            {/* search bar  */}
            <div className='px-2 my-2 flex gap-8 lg:px-10'>
                <Link className='text-4xl hidden md:flex text-black  font-mono font-semibold'>TrenDo</Link>

                <div className='border-3 rounded-xl gap-1 font-semibold border-neutral-200  text-neutral-500 px-2 w-full   flex justify-start items-center min-h-10  '>
                    <button className='text-base text-neutral-400 '><FaSearch /></button>
                    <input className=' w-full h-full py-2 outline-none' placeholder='Search Products...' type="search" />
                </div>

                <div className='md:flex hidden justify-center items-center gap-2 text-xl'>
                    <Link to="/"><IoBagHandleSharp />
                    </Link>
                    <Link to="/"><BsFillBellFill />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;