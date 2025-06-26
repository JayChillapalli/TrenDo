import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Logout = () => {
    const [logout, setLogout] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        const token = localStorage.getItem("token")
        setLogout(!!token)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("email")

        navigate("/login")
    }

    if(!logout) return null;

    return (
        <button onClick={handleLogout} className='text-white bg-black text-sm  px-5 rounded-lg py-1 cursor-pointer hover:bg-neutral-700'>Logout</button>
    )
}

export default Logout