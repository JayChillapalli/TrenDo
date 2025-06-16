import React, { useState } from 'react'
import { hero } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'



const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const navigate = useNavigate()

    const data = {
         email, password, 
    }

    const handleSignin = async (e) => {
        e.preventDefault()

        
        if (password.length < 8) {
            setError(true)
            setErrorMsg("the password length must be 8")
            return
        }

        navigate("/signin")

        setError(false)
    }
    return (
        <div className='w-full poppins-regular *:text-sm  h-screen bg-white px-4 flex  justify-center items-center'>

            {error && (
                <div className="absolute w-full md:w-2/4 lg:w-1/4 z-50 text-center top-4 left-1/2 transform -translate-x-1/2 transition-all ease-in-out   text-black capitalize px-4 py-2 rounded">
                    <div className='border border-neutral-500 p-2 rounded bg-white'>
                        {errorMsg}
                        <button onClick={() => setError(false)} className='ml-4 px-4 py-2 rounded-xl font-semibold bg-black text-white '>OK</button>

                    </div>
                </div>
            )}
            <div className='gap-2 overflow-hidden rounded-2xl border border-neutral-400 flex justify-center w-full lg:w-1/2  h-5/6  lg:flex-row flex-col-reverse bg-white'>
                <form onSubmit={handleSignin} className='flex  flex-col justify-center  items-center bg-white w-full  lg:h-full h-3/4 rounded-2xl p-5'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-4xl text-black font-mono font-semibold'>TrenDo</div>
                        <p className=' text-[12px] font-semibold text-neutral-400 capitalize'>leave the fear. set the  trend</p>
                    </div>
                    
                    <div className='w-full relative mt-4 lg:mt-0'>
                        <input type="email" required id="email" onChange={(e) => setEmail(e.target.value)}
                            className="peer w-full border-b border-gray-400 focus:outline-none focus:border-black bg-transparent pt-6 pb-2" placeholder=" " />
                        <label htmlFor="email" className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-black">email</label>
                    </div>
                    <div className='w-full relative mt-4 lg:mt-0'>
                        <input type="password" required id="password" onChange={(e) => setPassword(e.target.value)}
                            className="peer w-full border-b border-gray-400 focus:outline-none focus:border-black bg-transparent pt-6 pb-2" placeholder=" " />
                        <label htmlFor="password" className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-black">password</label>
                    </div>
                   

                    <button type='submit' className='flex w-full text-center  justify-center p-3 mt-10 rounded-xl bg-black hover:bg-neutral-900 cursor-pointer text-white font-semibold'>Login</button>

                    <Link to='/signin' className='mt-8 text-neutral-500'>Don't have an account ?</Link>
                </form>

                <div className='hidden overflow-hidden w-full lg:flex'>
                    <img className='w-full h-full  object-bottom object-contain' src={hero.mb} alt="" />
                </div>
            </div>



        </div>
    )
}

export default LoginPage