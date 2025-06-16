import React from 'react'


import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='lg:px-10 text-white bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex flex-col w-full justify-center items-center'>
            <div className='w-full h-full flex flex-col lg:flex-row justify-center items-center'>
                <div className=' w-full items-center text-center justify-center my-5 '>
                    <p className='font-mono font-semibold text-4xl'>TrenDo</p>
                    <p className='poppins-medium-italic'>let's shop beyond the boundaries</p>
                    <div className='flex w-full gap-5 justify-center items-center my-10'>
                        <button><FaFacebookSquare /></button>
                        <button><FaXTwitter /></button>
                        <button><FaYoutube /></button>
                        <button><AiFillInstagram /></button>
                    </div>
                </div>

                <div className='flex py-4 capitalize flex-col font-mono w-full text-center'>
                    <Link to='/'>home</Link>
                    <Link to='/clothing'>clothing</Link>
                    <Link to='/electronics'>electronics</Link>
                    <Link to='/about'>about</Link>
                </div>

                <div className='flex py-4 capitalize flex-col font-mono w-full text-center'>
                    <Link to='/faqs'>faqs</Link>
                    <Link to='/returns'>returns</Link>
                    <Link to='/shipping'>shipping</Link>
                    <Link to='/terms'>terms</Link>
                </div>

                <div className='flex py-4 capitalize flex-col font-mono w-full text-center'>
                    <p>email : satishchillapalli81@gmail.com</p>
                    <p>contact : +91 7995687250</p>
                </div>

            </div>
            <div className='text-center flex justify-center items-center w-full min-h-10 max-h-26 border-t border-t-slate-50'>
                <p>@satish chillapalli</p>
            </div>
        </div>
    )
}

export default Footer