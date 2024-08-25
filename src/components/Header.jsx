import React, { useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion"
import { RxCross2 } from "react-icons/rx";


const Header = () => {

    const [menu, setMenu] = useState(false);

    const handleMenu = (e) => {
        e.preventDefault();
        setMenu((prev) => !prev);
    }

    return (
        // Nav bar
        <nav className='flex md:place-content-between h-[80px] md:h-[100px] w-full  items-center px-5 lg:px-10 '>
            <div className='text-xl md:text-2xl font-bold'>LOREM IPSUM</div>
            <div>
                <ul className='text-slate-700 hidden md:flex gap-10 font-semibold cursor-pointer'>
                    <li className='hover:text-red-600 duration-300'>Booking</li>
                    <li className='hover:text-red-600 duration-300'>Facilities</li>
                    <li className='hover:text-red-600 duration-300'>About Us</li>
                    <li className='hover:text-red-600 duration-300'>Location</li>
                    <li className='hover:text-red-600 duration-300'>Contact</li>
                </ul>
            </div>
            <div className='ml-auto md:ml-0'>
                <button className=' hidden md:flex bg-green-500 text-sm hover:bg-green-700 duration-500 text-white px-4 py-2 rounded-3xl'>Login</button>
                <div className='md:hidden text-3xl ' onClick={handleMenu}>
                    {!menu ? <MdOutlineMenu /> : <RxCross2 />}
                </div>  
            </div>


                {/* TO show menu in Small screen */}
      <AnimatePresence>
            {
                      menu &&<motion.div
                    initial={{ opacity: 0, x: 400 }}
                    exit={{opacity:0 , x:400}}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0 }}
                    className='fixed w-full h-full flex flex-col bg-slate-200 bg-opacity-100 top-0 left-0 right-0 bottom-0  p-4 gap-16'>
                    <div className='flex flex-col gap-4 py-4'>
                    <div className='ml-auto text-3xl' onClick={handleMenu}>
                        <RxCross2 />
                    </div>
                        <h1 className='text-3xl md:text-2xl font-bold text-center'>LOREM ISPUM</h1>
                    </div>
                    <div className='px-4'>
                        <ul 
                            className='text-slate-700 text-center text-xl flex flex-col gap-6 font-semibold cursor-pointer'>
                            <li className=' hover:font-bold hover:text-red-700'>Home</li>
                            <li className=' hover:font-bold hover:text-red-700'>Booking</li>
                            <li className=' hover:font-bold hover:text-red-700'>Facilities</li>
                            <li className=' hover:font-bold hover:text-red-700'>About Us</li>
                            <li className=' hover:font-bold hover:text-red-700'>Location</li>
                            <li className=' hover:font-bold hover:text-red-700'>Contact</li>
                            <li className=' hover:font-bold hover:text-red-700'>Login</li>
                        </ul>
                    </div>
                </motion.div>
            }
      </AnimatePresence>
        </nav>
    )
}

export default Header
