import { slides } from '../assets/assets'
import { Link } from 'react-router-dom'

const ProductsBar = () => {

    const categories = [
        {name:"mens", image:slides.h1},
        {name:"womens", image:slides.h2},
        {name:"accesories", image:slides.h3},
        {name:"footwear", image:slides.h4},
    ]

    return (
        <div className='flex my-10 bg-white p-4 gap-5 w-full mx-auto md:justify-center px-5  overflow-x-scroll'>
           {categories.map((cat, index)=> (
            <Link className='flex flex-col items-center gap-2 ' key={index} to={`/${cat.name}`}>
                <div className='rounded-full bg-neutral-200 overflow-hidden size-20 md:size-24'>
                    <img className='w-full h-full object-contain' src={cat.image} alt={cat.name} />
                </div>
                <p className='text-sm capitalize font-semibold'>{cat.name}</p>
            </Link>
           ))}
        </div>
    )
}

export default ProductsBar