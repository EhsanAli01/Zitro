import React from 'react'

const CardBox = ({ detail, itemsPerPage }) => {
    const { thumbnail, title, rating, brand, description, price, stock } = detail;

    return (
        <div className='h-full cursor-pointer w-full border border-gray-600 rounded-lg px-7 py-4 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl'>
            <div className='w-full flex items-center gap-4'>
                <div className='bg-slate-50 w-20 h-20 border border-gray-600 rounded-2xl overflow-hidden'>
                    <img src={thumbnail} alt="Product" className='h-full w-full object-cover' />
                </div>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-xl font-semibold'>{title}</h1>
                    <div className='flex gap-3 text-gray-500 text-pretty'>
                        <span>Rating: {rating}</span>
                        <span>Brand: {brand}</span>
                    </div>
                </div>
            </div>
            <p className='text-gray-500'>{description}</p>
            <div className='flex gap-4 text-blue-950'>
                <span><span className='font-semibold'>Price:</span> {price} $</span>
                <span><span className='font-semibold'>Stock:</span> {stock}</span>
            </div>
        </div>
    )
}

export default CardBox
