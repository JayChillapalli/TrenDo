import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

import { FaHeart } from "react-icons/fa";
import RatingBar from '../components/RatingBar';

const SearchPage = () => {

    const [products, setProducts] = useState([])
    const location = useLocation()

    const query = new URLSearchParams(location.search).get("query")

    useEffect(() => {
        if (query) {
            fetch(`https://dummyjson.com/products/search?q=${query}`)
                .then((res) => res.json())
                .then((data) => setProducts(data.products))
                .catch(err => console.log(err))
        }
    }, [query])

    return (
        <div>
            <p className='text-lg m-5 capitalize font-semibold'>search results for {query}</p>
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
                                <div className='flex items-center gap-2'>
                                    <RatingBar rating={product.rating} />
                                    <p className='text-[12px] font-semibold'>{product.rating}</p>
                                </div>
                            </div>
                            <div className='flex flex-col text-center gap-2 mb-2 mt-2 capitalize'>
                                <button className='w-full rounded capitalize text-sm p-1 font-semibold hover:bg-neutral-200 bg-gray-100 '>Add to cart</button>
                                <Link to={`/buynow/${product.id}`} className='w-full rounded capitalize text-sm p-1 font-semibold hover:bg-neutral-800 bg-black text-white'>buy now</Link>
                            </div>

                        </Link>
                    ))
                }
            </div>

        </div>
    )
}

export default SearchPage