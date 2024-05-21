import React from 'react'
import logo from '../assets/logo.png'
import { IoNotifications, } from "react-icons/io5";
import { RiArrowDropDownLine, RiMessengerFill, RiMenu4Fill } from "react-icons/ri";
import johnDoe from '../assets/johnDoe.jpg';
import { RxCrossCircled } from "react-icons/rx";

const Navbar = () => {

    const menuHandler = (condition) => {
        const menuBox = document.getElementById('menu-box');

        if (condition === 'open-menu') menuBox.classList.remove('hidden');
        if (condition === 'close-menu') menuBox.classList.add('hidden');
    };


    return (
        <nav id='navBar' className='py-4 border-b border-gray-400 flex items-center justify-between bg-slate-50 sticky top-0 transition-all duration-300'>
            <div className='h-full flex items-center mx-24 w-64 max-[1135px]:w-auto max-sm:mx-6'>
                <img src={logo} alt="Zetro Services" className='h-10' />
            </div>

            <ul className='h-full flex items-center gap-12 text-xl font-semibold text-gray-600 max-[1135px]:hidden'>
                <li><a href="#" className='text-red-600 border-b-2 border-red-600 py-1'>Home</a></li>
                <li><a href="#" className='transition-colors duration-200 hover:text-red-600 hover:border-b-2 hover:border-red-600 hover:py-1' >Jobs</a></li>
                <li><a href="#" className='transition-colors duration-200 hover:text-red-600 hover:border-b-2 hover:border-red-600 hover:py-1' >Messages</a></li>
            </ul>

            <div className='mx-24 w-60 flex items-center justify-between gap-2 text-gray-700 max-[1135px]:hidden'>
                <div className='border border-solid border-gray-600 text-2xl rounded-full p-1 max-[1135px]:hidden'>
                    <RiMessengerFill />
                </div>
                <div className='border border-solid border-gray-600 text-2xl rounded-full p-1 max-[1135px]:hidden'>
                    <IoNotifications />
                </div>
                <div className='flex items-center px-0.5 py-0.5 border border-gray-600 border-solid rounded-full gap-1'>
                    <div className='h-8 w-8 border border-gray-600 border-solid rounded-full overflow-hidden'>
                        <img src={'https://e0.pxfuel.com/wallpapers/329/5/desktop-wallpaper-cute-stylish-baby-boys-little-boy-thumbnail.jpg'} alt="userPic" className="w-full h-full object-cover" />
                    </div>
                    <span className='font-semibold'>John Doe</span>
                    <RiArrowDropDownLine className='text-2xl' />
                </div>
            </div>

            <RiMenu4Fill id='menbar' className='cursor-pointer h-10 w-10 mx-24 min-[1135px]:hidden max-sm:mx-6' onClick={() => menuHandler('open-menu')} />

            <section id='menu-box' className='fixed h-screen transition-all duration-300 bg-black bg-opacity-50 top-0 left-0 w-screen z-10 hidden'>
                <ul id='menu' className='fixed top-0 right-0 bg-slate-100 opacity-100 h-screen transition-all duration-300 px-10 pt-28 w-72 flex items-center translate-x-60 animate-menu-show flex-col gap-6 shadow-md border-l border-black font-bold z-20 max-sm:w-60'>
                    <RxCrossCircled className='absolute top-5 right-5 h-8 w-8' onClick={() => menuHandler('close-menu')} />
                    <li><a href="#" className='text-red-600 border-b-2 border-red-600 py-1'>Home</a></li>
                    <li><a href="#" className='transition-colors duration-200 hover:text-red-600 hover:border-b-2 hover:border-red-600 hover:py-1'>Jobs</a></li>
                    <li><a href="#" className='transition-colors duration-200 hover:text-red-600 hover:border-b-2 hover:border-red-600 hover:py-1'>Messages</a></li>
                    <li><a href="#" className='transition-colors duration-200 hover:text-red-600 hover:border-b-2 hover:border-red-600 hover:py-1'>Profile</a></li>
                </ul>
            </section>


        </nav>
    )
}

export default Navbar