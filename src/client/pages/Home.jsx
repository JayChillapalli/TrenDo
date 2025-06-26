import React from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'
import ProductsBar from '../components/ProductsBar'
import Hero2 from '../components/Hero2'
import Shoes from '../components/Shoes'
import {  } from 'react-router-dom'


const Home = () => {  
  
  return (
    <div className=''>
      <Hero />
      <ProductsBar />
      <Products />
      <Hero2 />
      <Shoes />


    </div>
  )
}

export default Home