import React, { useEffect, useState } from 'react'
import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './client/pages/Home'
import Navbar from './client/components/Navbar'
import Footer from './client/components/Footer'
import ProductPage from './client/pages/ProductPage'
import SignIn from './client/pages/SignInPage'
import LoginPage from './client/pages/LoginPage'
import CartPage from './client/pages/CartPage'
import Protected from './client/routes/Protected'
import SearchProductPage from './client/pages/SearchPage'

const App = () => {

  return (
    <BrowserRouter>
      <div className="flex flex-col w-full max-w-[1440px] mx-auto">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={`/cart`} element={<Protected><CartPage /></Protected>} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/search' element={<SearchProductPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
