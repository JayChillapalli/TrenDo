import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { BsFillBellFill } from "react-icons/bs";
import Logout from './Logout';



const Navbar = () => {
    const [nav, setNav] = useState(false)
    const token = localStorage.getItem("token")
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
   
    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            navigate(`/search?query=${search}`);
        }
    };





    return (
        <div className='text-sm   md:text-sm lg:text-base text-neutral-400'>
            <div className='relative border-b border-b-gray-100 p-2 lg:px-10 lg:py-2 font-semibold capitalize'>
                <div className='  flex items-center justify-end md:justify-between' >
                    <div className='hidden md:flex '>
                        Download Mobile App
                    </div>
                    <div className='hidden md:flex items-center gap-4'>
                        <Link to='/'>home</Link>
                        <Link to='/clothing'>clothing</Link>
                        <Link to='/electronics'>electronics</Link>
                        <Link to='/about'>about</Link>
                        <p className='w-0.5 h-full bg-gray-300'></p>
                        {
                            !token ? (
                                <div className='flex flex-row gap-2'>
                                    <Link className='font-bold text-black' to='/signin'>signin</Link>
                                    <p className='w- h-full bg-black'></p>
                                    <Link className='font-bold text-black' to='/login'>login</Link>
                                </div>
                            ) : (
                                <Logout />
                            )
                        }
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
                                <Link onClick={() => setNav(false)} to='/'>home</Link>
                                <Link onClick={() => setNav(false)} to='/clothing'>clothing</Link>
                                <Link onClick={() => setNav(false)} to='/electronics'>electronics</Link>
                                <Link onClick={() => setNav(false)} to='/about'>about</Link>

                                {
                                    !token ? (
                                        <div className='flex gap-2'>
                                            <Link onClick={() => setNav(false)} className='bg-black mt-10 w-full p-2 rounded text-white text-center' to='/signin'>signin</Link>
                                            <Link onClick={() => setNav(false)} className='bg-black w-full p-2 rounded text-white text-center' to='/login'>login</Link>
                                        </div>
                                    ) : (
                                        <Logout />
                                    )
                                }


                            </div>

                        </div>
                    )
                }
            </div>
            {/* search bar  */}
            <div className='px-2 my-2 flex gap-8 lg:px-10'>
                <Link className='text-4xl hidden md:flex text-black  font-mono font-semibold'>TrenDo</Link>

                <div className='border-3 rounded-xl gap-1 font-semibold border-neutral-200  text-neutral-500  w-full flex flex-row-reverse px-4 lg:pl-5 lg:px-0 justify-start items-center min-h-10  '>
                    <button onClick={handleSearch} className='text-base lg:hidden text-neutral-400 flex items-center '><FaSearch /></button>
                    <button onClick={handleSearch} className='text-base hidden lg:flex w-1/6 h-full  items-center bg-black rounded-r-xl text-center cursor-pointer justify-center text-white  '>search</button>
                    <input onChange={(e) => setSearch(e.target.value)} className=' w-full h-full py-2 outline-none' placeholder='Search Products...' type="search" />
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