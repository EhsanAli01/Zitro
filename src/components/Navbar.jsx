import React from 'react'
import logo from '../assets/logo.png'
import { IoSearchSharp, IoNotificationsOutline } from "react-icons/io5";
import { RiArrowDropDownLine, RiMenu4Fill } from "react-icons/ri";
import johnDoe from '../assets/johnDoe.jpg';
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

    const menuHandler = () => {
        let menu = document.getElementById('menu');
        let menbar = document.getElementById('menbar');
        let cross = document.getElementById('cross');
        menu.classList.toggle('hidden');
        menbar.classList.toggle('hidden');
        cross.classList.toggle('hidden');
    };


    return (
        <nav id='navBar' className='py-4 border-b border-gray-400 flex items-center justify-between bg-slate-50 sticky top-0 transition-all duration-300'>
            <div className='h-full flex items-center mx-24 w-64 max-[1135px]:w-auto max-sm:mx-10'>
                <img src={logo} alt="Zetro Services" className='h-10' />
            </div>

            <ul className='h-full flex items-center gap-12 text-xl font-semibold text-gray-600 max-[1135px]:hidden'>
                <li><a href="#" className='text-red-600 border-b-2 border-red-600 py-1'>Home</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Messages</a></li>
            </ul>

            <div className='mx-24 w-60 flex items-center justify-between gap-2 text-gray-700 max-[1135px]:hidden'>
                <div className='border border-solid border-gray-600 text-2xl rounded-full p-1 max-[1135px]:hidden'>
                    <IoSearchSharp />
                </div>
                <div className='border border-solid border-gray-600 text-2xl rounded-full p-1 max-[1135px]:hidden'>
                    <IoNotificationsOutline></IoNotificationsOutline>
                </div>
                <div className='flex items-center px-1 py-px border border-gray-400 border-solid rounded-full gap-1'>
                    <div className='h-8 w-8 border border-gray-600 border-solid rounded-full overflow-hidden'>
                        <img src={johnDoe} alt="userPic" className="w-full h-full object-cover" />
                    </div>
                    <span className='font-semibold'>John Doe</span>
                    <RiArrowDropDownLine className='text-2xl' />
                </div>
            </div>

            <RiMenu4Fill id='menbar' className='cursor-pointer h-10 w-10 mx-24 min-[1135px]:hidden max-sm:mx-10' onClick={menuHandler} />
            <RxCross2 id='cross' className='cursor-pointer h-10 w-10 mx-24 min-[1135px]:hidden max-sm:mx-10 hidden' onClick={menuHandler} />


            <ul id='menu' className='absolute top-16 right-28 bg-slate-100 rounded-md px-10 py-14 w-56 flex justify-center items-center flex-col gap-6 shadow-md border border-black font-bold max-sm:right-12 hidden'>
                <li><a href="#">Profile</a></li>
                <div className='border border-gray-800 w-full'></div>
                <li><a href="#" className='text-red-600 border-b-2 border-red-600 py-1'>Home</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Messages</a></li>
            </ul>
        </nav>
    )
}

export default Navbar