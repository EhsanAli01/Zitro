import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import products from '../assets/products.json';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import CardBox from './CardBox';
import { PiEmptyDuotone } from "react-icons/pi";

const HomeBody = () => {
    const [isActive, setActive] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(filteredProducts.length / 6);
    const minCount = 0;
    const maxCount = totalPages;


    const handleClick = (page) => {
        if (page <= maxCount && page > minCount) {
            setCurrentPage(page);
        }
    };

    const searchHandler = (e) => {
        const searchQuery = e.target.value.trim().toLowerCase();

        if (searchQuery === '') {
            filterHandler(isActive ? 'active' : 'posted');
            return;
        }

        const filtered = products.filter((product) =>
            product.brand.toLowerCase().includes(searchQuery) ||
            product.title.toLowerCase().includes(searchQuery) ||
            product.category.toLowerCase().includes(searchQuery)
        );

        setFilteredProducts(filtered);
    }


    const filterHandler = (condition) => {

        if (condition === 'active') {
            const filteredProducts = products.filter((product) => product.price >= 60 && product.discountPercentage >= 10);
            setActive(true);
            setFilteredProducts(filteredProducts);
        }
        if (condition === 'posted') {
            setActive(false);
            setFilteredProducts(products);
        }
    }

    const indexOfLastItem = currentPage * 6;
    const indexOfFirstItem = indexOfLastItem - 6;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <main className='h-5/6'>
            <section className='h-24 mt-4 flex justify-between items-center max-md:flex-col-reverse max-md:my-6 max-md:mx-24 max-sm:mx-6 max-md:h-20'>
                <div className='mx-24 h-8 border border-blue-950 flex items-center rounded-full overflow-hidden font-semibold max-sm:text-sm max-sm:mx-10'>
                    <button onClick={() => filterHandler('posted')} className={`flex items-center px-3 py-2 h-full ${isActive ? '' : 'bg-slate-800 text-white'}`}>Posted</button>
                    <button onClick={() => filterHandler('active')} className={`flex items-center px-3 py-2 h-full ${isActive ? 'bg-slate-800 text-white' : ''}`}>Active</button>
                </div>
                <div id='searchdiv' className='mx-24 w-60 h-8 flex items-center border border-gray-600 rounded-full overflow-hidden  max-sm:mx-10 max-md:w-full' >
                    <input type="search" id='search' placeholder='Search' className='px-4 py-1 border-none outline-none flex w-full items-center' onChange={searchHandler} />
                    <IoSearchSharp id='searchIcon' className='h-6 w-6 mx-2' />
                </div>
            </section>
            {filteredProducts.length === 0 ?
                <div className='mx-24 flex flex-col justify-center items-center gap-2 text-6xl opacity-50 h-80'>
                    <PiEmptyDuotone />
                    <h1>Nothing found</h1>
                </div>
                :
                <>
                    <section className=' mx-24 grid gap-x-6 gap-y-4 sm:grid-cols-1 md:grid-cols-2 max-sm:mx-6'>
                        {currentItems?.map(data => <CardBox key={data.id} detail={data} />)}
                    </section>
                    <section className='h-24 flex justify-center items-center gap-4 text-sm font-semibold max-md:text-sm'>
                        <button className='bg-gray-500 text-white border border-gray-500 border-solid rounded-full h-7 w-7 flex justify-center items-center transition-all duration-200 hover:bg-gray-600 hover:border-gray-600' onClick={() => { handleClick(currentPage - 1) }}><FaArrowLeft /></button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handleClick(index + 1)}
                                className={`h-7 w-7 border border-solid transition-all duration-200 border-blue-950 rounded-full flex justify-center items-center hover:bg-blue-950 hover:text-white max-sm:hidden ${index + 1 === currentPage ? 'bg-blue-950 text-white' : 'bg-white text-blue-950'
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button className='bg-blue-700 transition-all duration-200 text-white border border-blue-700 border-solid rounded-full h-7 w-7 flex justify-center items-center hover:bg-blue-800 hover:border-blue-800' onClick={() => handleClick(currentPage + 1)}><FaArrowRight /></button>
                    </section>
                </>
            }
        </main>
    )
}


export default HomeBody;