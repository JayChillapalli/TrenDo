import React from 'react'

const RatingBar = ({rating}) => {

    const percentage = (rating / 5) * 100

  return (
    <div className='w-40 my-1 h-2 bg-gray-200 rounded'>
        <div className={`rounded w-[${percentage}%] h-2 bg-neutral-700`}></div>
    </div>
  )
}

export default RatingBar