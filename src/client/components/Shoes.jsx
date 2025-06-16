import { Link } from 'react-router-dom';
import { shoes } from '../assets/assets';
import RatingBar from './RatingBar';
import { useEffect, useState } from 'react';

import { FaArrowRight } from "react-icons/fa";


const Shoes = () => {

    const [shoe, setShoe] = useState([])

    // const shoe = [shoes.h6, shoes.s1, shoes.s2, shoes.s3]
    useEffect(() => {
        fetch('https://dummyjson.com/products/category/mens-shoes?limit=4')
            .then(res => res.json())
            .then(data => setShoe(data.products))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='flex lg:p-10  md:flex-row p-4 gap-4 relative md:overflow-hidden flex-col justify-center items-center w-full  bg-slate-50'>
            <div className='flex h-full rounded-xl flex-col justify-center items-center bg-white'>
                <div className='p-4 mt-10'>
                    <p className='text-4xl font-mono'>latest arrival</p>
                </div>
                <div className='p-4 overflow-hidden '>
                    <img className='hover:scale-110 animation' src={shoes.h4} alt="" />
                </div>
                <div className=' p-4'>
                    <p className='text-3xl font-semibold cursive'>StrideX</p>
                    <p className='poppins-medium-italic lg:text-lg'>Move Bold. Live Free.</p>
                    <p className='poppins-medium-italic lg:text-lg'>Every step tells your story — make it fearless.</p>
                    <p className='poppins-regular text-sm'>StrideX blends comfort with bold design to keep you moving in style. From everyday walks to big journeys, our shoes are made to match your every step.</p>
                </div>
                <div className='flex w-full px-4 justify-center items-center text-center gap- mb-2 mt-2 capitalize hover:bg-neutral-800 bg-black text-white'>
                    <Link to={`/footwear`} className=' rounded capitalize text-sm p-2 font-semibold '>explore more</Link>
                    <FaArrowRight  />
                </div>
            </div>

            <div className=' w-full gap-2 grid grid-cols-2'>
                {
                    shoe.map((item) => (
                        <Link className=' rounded-t-2xl rounded-b-xl h-auto overflow-hidden realtive bg-white ' key={item.id} to={`/product/${item.id}`}>
                            <div className='size-full lg:grid lg:grid-cols-2 relative h-auto bg-neutral-100 overflow-hidden'>
                                <img className='w-full  hover:scale-150 transition-all overflow-hidden h-full object-contain' src={item.images[0]} alt="" />
                                <img className='w-full  hover:scale-150 transition-all overflow-hidden h-full object-contain hidden lg:flex' src={item.images?.[1]} alt="" />
                                <img className='w-full  hover:scale-150 transition-all overflow-hidden h-full object-contain hidden lg:flex' src={item.images?.[2]} alt="" />
                                <img className='w-full  hover:scale-150 transition-all overflow-hidden h-full object-contain hidden lg:flex' src={item.images?.[3]} alt="" />
                            </div>

                            <div className='p-2'>
                                <p className='text-lg font-medium'>{item.brand}</p>
                                <p className='text-sm '>{item.title}</p>
                                <div className='flex flex-col md:flex-row md:items-center  md:gap-3'>
                                    <p className='text-lg font-medium'>${Number(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2)}</p>
                                    <p className='text-sm line-through '>${item.price}</p>
                                </div>
                                <p>{item.category}</p>
                                <div className='flex items-center gap-2'>
                                    <RatingBar rating={item.rating} />
                                    <p className='text-[12px] font-semibold'>{item.rating}</p>
                                </div>
                                <div className='flex flex-col text-center gap-2 mb-2 mt-2 capitalize'>
                                    <Link to={`/addcart/${item.id}`} className='w-full rounded capitalize text-sm p-1 font-semibold hover:bg-neutral-200 bg-gray-100 '>Add to cart</Link>
                                    <Link to={`/buynow/${item.id}`} className='w-full rounded capitalize text-sm p-1 font-semibold hover:bg-neutral-800 bg-black text-white'>buy now</Link>
                                </div>

                            </div>

                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Shoes