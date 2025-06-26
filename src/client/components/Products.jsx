import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

import { FaHeart } from "react-icons/fa";
import RatingBar from './RatingBar';



const Products = () => {

    const [products, setProducts] = useState([])
    const [products2, setProducts2] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/womens-dresses')
            .then(res => res.json())
            .then(data => {
                // console.log('Fetched womens :', data); // Debug
                setProducts(data.products); // ✅ should be an array
            })
            .catch(err => console.error('Fetch error:', err));

        fetch('https://dummyjson.com/products/category/mens-shirts')
            .then(res => res.json())
            .then(data => {
                // console.log('Fetched:', data); // Debug
                setProducts2(data.products); // ✅ should be an array
            })
            .catch(err => console.error('Fetch error:', err));
    }, []);

    return (
        <div className='bg-slate-100 '>
            <div className='flex w-full justify-center items-center gap-2 text-neutral-400  pt-10  my-5'>
                <p className='w-20 h-0.5 bg-slate-300'></p>
                <p className='text-3xl  cursive'><span className='text-neutral-500 text-4xl'>N</span>ew <span className='text-neutral-500  text-4xl'>A</span>rrivals</p>
                <p className='w-20 h-0.5 bg-slate-300'></p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  lg:max-w-3/4 mx-auto  p-4 gap-2'>
                {
                    products2.map((product) => (
                        <Link className=' rounded-t-2xl rounded-b-xl h-auto overflow-hidden realtive bg-white ' key={product.id} to={`/product/${product.id}`}>
                            <div className='w-full relative h-auto bg-neutral-300 overflow-hidden'>
                                <button className=' absolute right-0 m-2 text-sm md:text-lg bg-white text-neutral-300 rounded-full p-2 '><FaHeart /></button>
                                <img className='w-full scale-125 hover:scale-150 transition-all overflow-hidden h-full object-contain' src={product.images[0]} alt="" />
                            </div>

                            <div className='p-2'>
                                <p className='text-lg font-medium'>{product.brand}</p>
                                <p className='text-sm '>{product.title}</p>
                                <div className='flex flex-col md:flex-row md:items-center  md:gap-3'>
                                    <p className='text-lg font-medium'>${Number(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}</p>
                                    <p className='text-sm line-through '>${product.price}</p>
                                </div>
                                <p>{product.category}</p>
                                <div className='flex items-center mb-2 gap-2'>
                                    <RatingBar rating={product.rating} />
                                    <p className='text-[12px] font-semibold'>{product.rating}</p>
                                </div>
                            </div>

                        </Link>
                    ))
                }
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  lg:max-w-3/4 mx-auto  p-4 gap-2'>
                {
                    products.map((product) => (
                        <Link className=' rounded-t-2xl rounded-b-xl h-auto overflow-hidden realtive bg-white ' key={product.id} to={`/product/${product.id}`}>
                            <div className='w-full relative h-auto bg-neutral-300 overflow-hidden'>
                                <button className=' absolute right-0 m-2 text-sm md:text-lg bg-white text-neutral-300 rounded-full p-2 '><FaHeart /></button>
                                <img className='w-full scale-125 hover:scale-150 transition-all overflow-hidden h-full object-contain' src={product.images?.[0]} alt="" />
                            </div>

                            <div className='p-2'>
                                <p className='text-lg font-medium'>{product.brand}</p>
                                <p className='text-sm '>{product.title}</p>
                                <div className='flex flex-col md:flex-row md:items-center  md:gap-3'>
                                    <p className='text-lg font-medium'>${Number(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}</p>
                                    <p className='text-sm line-through '>${product.price}</p>
                                </div>
                                <p>{product.category}</p>
                                <div className='flex items-center mb-2 gap-2'>
                                    <RatingBar rating={product.rating} />
                                    <p className='text-[12px] font-semibold'>{product.rating}</p>
                                </div>
                            </div>
                           

                        </Link>
                    ))
                }
            </div>


        </div>
    )
}

export default Products