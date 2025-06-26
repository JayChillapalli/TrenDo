import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { FaStar } from "react-icons/fa";
import RatingBar from '../components/RatingBar';
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";



const ProductPage = () => {

    const { id } = useParams()

    const [product, setProduct] = useState([])
    const [image, setImage] = useState(null)
    const [reviews, setReviews] = useState([])
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate()

    const [like, setLike] = useState()


    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setImage(data.images?.[0])
                setReviews(data.reviews)
            })
            .catch(err => console.log(err))
    }, [id])



    const addCart = async () => {
        const productId = product.id
        const email = localStorage.getItem("email")

        const cartData = { productId, email, quantity }

        try {
            const token = localStorage.getItem("token")
            const res = await axios.post('http://localhost:1712/api/addcart', cartData)
            if (token) {
                if (res.data.success) {
                    navigate(`/${res.data.user}/cart`)
                    localStorage.setItem("user", res.data.user)
                    console.log("from  products page",res.data.user);
                    
                }
                else {
                    console.log(res.data.message);
                }
            }

        } catch (error) {
            console.log(error);

        }

    }


    if (!product) (
        <div>loading....</div>
    )
    return (
        <div className='flex flex-col gap-2 bg-slate-100'>
            {/* product images  */}
            <div className='flex bg-white p-4 flex-col lg:flex-row lg:px-20 lg:max-h-screen md:p-10 gap-4 shadow-md shadow-neutral-600'>

                <div className='h-auto overflow-hidden flex gap-2  flex-col-reverse lg:flex-row '>
                    <div className='flex lg:flex-col rounded-2xl bg-slate-50 overflow-hidden overflow-x-scroll md:overflow-hidden border-red-600  items-center'>
                        {
                            product.images && product.images.map((img, index) => (
                                <img className='size-30 md:size-48  object-contain '
                                    src={img} key={index} onClick={() => setImage(img)} />
                            ))}
                    </div>
                    <div className='bg-slate-50 rounded-2xl'>
                        <img className='object-cover' src={image} alt="" />
                    </div>
                </div>
                {/* product infromation  */}
                <div className=''>
                    <div className='mt-5 capitalize  flex flex-col gap-2'>
                        <p className='text-2xl font-semibold'>{product.title}</p>
                        <p className='font-medium text-neutral-500'>{product.description}</p>
                        <div className='flex gap-4 items-center flex-row md:items-center  md:gap-3'>
                            <p className='text-3xl  font-medium'>${Number(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}</p>
                            <p className='text-base  line-through text-red-800'>${product.price}</p>
                            <p className='text-base text-green-700 '>{product.discountPercentage}% off</p>
                        </div>
                        <div className='flex gap-3 text-neutral-800 my-2 items-center justify-center  w-30'>
                            <button onClick={() => setQuantity(prev => prev + 1)} className='border p-1 border-neutral-400 cursor-pointer'><FaPlus /></button>
                            <p className='text-2xl'>{quantity}</p>
                            <button onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))} className='border p-1 border-neutral-400 cursor-pointer'><FaMinus /></button>
                        </div>
                        <p className='bg-black w-20 flex items-center justify-center gap-1 font-semibold text-white text-center p-1 rounded-lg '>{product.rating} <span><FaStar /></span></p>
                        <p className='text-lg font-medium'>{product.brand}</p>
                        <p className='font-medium'>{product.category}</p>
                    </div>
                    <div className='flex px-4 gap-4 flex-col text-center mb-2 mt-2 capitalize'>
                        <button onClick={addCart} className='w-full rounded capitalize text-sm p-1 font-semibold hover:bg-neutral-200 bg-gray-100 '>Add to cart</button>
                        <Link to={`/buynow/${product.id}`} className='w-full rounded capitalize text-sm p-1 font-semibold hover:bg-neutral-800 bg-black text-white'>buy now</Link>
                    </div>
                </div>
            </div>
            {/* product details  */}
            <div className='bg-white  lg:px-20 gap-1.5 flex flex-col p-4 shadow-md shadow-neutral-600'>
                <p className='mt-10 text-xl font-bold capitalize'>product details</p>
                <p className='text-base font-medium text-neutral-500 lg:max-w-2/3'>{product.description}</p>
                <div className=' capitalize '>
                    <div className='flex gap-5 capitalize p-1 '>
                        <p className=' text-neutral-600 font-medium'>brand</p><p>:</p><p className='font-semibold '>{product?.brand}</p>
                    </div>
                    <div className='flex gap-5 capitalize p-1 '>
                        <p className=' text-neutral-600 font-medium'>weight</p><p>:</p><p className='font-semibold '>{product?.weight}</p>
                    </div>
                    <div className='font-semibold text-neutral-600 text-lg'>dimensions</div>
                    <div className='flex gap-5 capitalize p-1 '>
                        <p className=' text-neutral-600 font-medium'>width</p><p>:</p><p className='font-semibold '>{product.dimensions?.width}</p>
                    </div>
                    <div className='flex gap-5 capitalize p-1 '>
                        <p className=' text-neutral-600 font-medium'>height</p><p>:</p><p className='font-semibold '>{product.dimensions?.height}</p>
                    </div>
                    <div className='flex gap-5 capitalize p-1 '>
                        <p className=' text-neutral-600 font-medium'>depth</p><p>:</p><p className='font-semibold '>{product.dimensions?.depth}</p>
                    </div>
                    <div className='flex gap-5 capitalize p-1 '>
                        <p className=' text-neutral-600 font-medium'>warranty information</p><p>:</p><p className='font-semibold '>{product?.warrantyInformation}</p>
                    </div>
                    <div className='flex gap-5 capitalize p-1 '>
                        <p className=' text-neutral-600 font-medium'>shipping information</p><p>:</p><p className='font-semibold '>{product?.shippingInformation}</p>
                    </div>
                    <div className='flex gap-5 mb-5 capitalize p-1 '>
                        <p className=' text-neutral-600 font-medium'>return Policy</p><p>:</p><p className='font-semibold '>{product?.returnPolicy}</p>
                    </div>

                </div>
            </div>
            {/* reviews  */}
            <div className=' mb-2 shadow-md shadow-neutral-600'>
                <div className='flex p-4 flex-col lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-4 bg-white'>
                    {/* <p className=' capitalize text-xl p-2 font-semibold'>reviews</p> */}
                    {
                        reviews.map((review, index) => (
                            <div className='w-full flex flex-col border border-neutral-200 gap-1 rounded-lg m-1 p-4 text-base' key={index}>
                                <p className='poppins-regular lg:text-sm'>{review?.reviewerName}</p>
                                <p className='poppins-regular lg:text-sm'>{review?.reviewerEmail}</p>
                                <div className='flex gap-2 items-center text-[12px]'>
                                    <RatingBar rating={review?.rating} />
                                    <p>{review?.rating} out of 5</p>
                                </div>
                                <p className='poppins-regular lg:text-sm'>{review?.comment}</p>
                                <div className='flex gap-5 items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <button className={` cursor-pointer text-xl  ${like ? "text-blue-700 " : "text-neutral-400"} `} onClick={() => setLike(true)}><AiFillLike /></button>
                                        <p>0</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <button className={` cursor-pointer text-xl text-neutral-400 ${like ? "text-blue-700" : "text-neutral-400"} `} onClick={() => setLike(true)}><AiFillDislike /></button>
                                        <p>0</p>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default ProductPage