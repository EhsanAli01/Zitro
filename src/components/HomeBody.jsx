import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import products from '../assets/products.json';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import CardBox from './CardBox';

const HomeBody = () => {
    const [isActive, setActive] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(products);

    const filterHandler = (condition) => {

        const filteredProducts = products.filter((product) => product.brand == "Apple");
        if (condition === 'active') {
            setActive(true);
            setFilteredProducts(filteredProducts);
        }
        if (condition === 'posted') {
            setActive(false);
            setFilteredProducts(products);
        }
    }

    return (
        <main className='h-5/6'>
            <section className='h-24 mt-4 flex justify-between items-center'>
                <div className='mx-24 h-8 border border-blue-950 flex items-center rounded-full overflow-hidden font-semibold max-sm:text-sm max-sm:mx-10'>
                    <button onClick={() => filterHandler('posted')} className={`flex items-center px-3 py-2 h-full ${isActive ? '' : 'bg-slate-800 text-white'}`}>Posted</button>
                    <button onClick={() => filterHandler('active')} className={`flex items-center px-3 py-2 h-full ${isActive ? 'bg-slate-800 text-white' : ''}`}>Active</button>
                </div>
                <div className='mx-24 w-60 h-8 flex items-center border border-gray-600 rounded-full overflow-hidden max-md:w-8 max-md:rounded-full max-sm:mx-10'>
                    <input type="search" placeholder='Search' className='px-4 py-1 border-none outline-none flex w-full items-center max-md:hidden' />
                    <IoSearchSharp className='h-6 w-6 mx-2' />
                </div>
            </section>
            <section className='mx-24 grid gap-x-6 gap-y-4 grid-rows-3 sm:grid-cols-1 md:grid-cols-2 max-sm:mx-10'>
                {filteredProducts?.map(data => <CardBox key={data.id} detail={data} />)}
            </section>
            <section className='h-24 flex justify-center items-center gap-4 text-sm font-semibold max-md:text-sm'>
                <button className='cursor-not-allowed bg-gray-500 text-white border border-gray-500 border-solid rounded-full h-7 w-7 flex justify-center items-center'><FaArrowLeft /></button>
                <button className='transition-all duration-300 hover:bg-blue-950 hover:text-white border border-gray-500 border-solid rounded-full h-7 w-7 flex justify-center items-center max-sm:hidden'>1</button>
                <button className='transition-all duration-300 hover:bg-blue-950 hover:text-white border border-gray-500 border-solid rounded-full h-7 w-7 flex justify-center items-center max-sm:hidden'>2</button>
                <button className='transition-all duration-300 hover:bg-blue-950 hover:text-white border border-gray-500 border-solid rounded-full h-7 w-7 flex justify-center items-center max-sm:hidden'>3</button>
                <button className='transition-all duration-300 hover:bg-blue-950 hover:text-white border border-gray-500 border-solid rounded-full h-7 w-7 flex justify-center items-center max-sm:hidden'>4</button>
                <button className='bg-blue-950 text-white border border-blue-950 border-solid rounded-full h-7 w-7 flex justify-center items-center'><FaArrowRight /></button>
            </section>
        </main>
    )
}


export default HomeBody;