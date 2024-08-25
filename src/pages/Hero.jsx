import React from 'react'
import { FaPlay } from "react-icons/fa";
import image1 from "../assets/Bonus/DJCSI Technical Tasks.png"
import { motion } from 'framer-motion'

const Hero = () => {

    const container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
    });

    return (
        // Hero section
        <section className='my-4 md:my-10 md:mx-20 flex flex-col lg:flex-row lg:h-[calc(100vh-200px)] gap-10 lg-gap-0 '>
            <div className='flex flex-col w-full lg:w-[45%] px-6 lg:px-10 gap-8 md:gap-16 md:mt-14 pt-7'>
                <div className='md:ml-16 md:pl-8 space-y-8'>
                    <motion.h1
                        variants={container(0.4)}
                        initial="hidden"
                        animate="visible"
                        className='text-4xl md:4xl lg:text-6xl font-semibold'>Find your perfect place to stay</motion.h1>
                    <motion.p
                        variants={container(0.6)}
                        initial="hidden"
                        animate="visible"
                        className='text-md md:text-lg text-gray-800  opacity-80'>
                        Lorem ipsum is simply dummy text of the printing and typesetting industry.
                    </motion.p>
                </div>
                <div className='md:mx-20 px-5'>
                    <motion.button
                        variants={container(0.8)}
                        initial="hidden"
                        animate="visible"
                        className='flex gap-2 items-center'>
                        <FaPlay className='text-green-600' />  <span className='font-semibold text-md md:text-lg'>Watch video</span>
                    </motion.button>
                </div>
            </div>
            <div className=' mx-auto  h-[320px] md:h-[400px] lg:h-full px-6 md:px-10   '>
                <motion.img 
                    initial = {{opacity:0,x:100}}
                    animate = {{opacity:1,x:0}}
                    transition={{duration:0.8 , delay:0.6}}
                    src={image1} alt="img" 
                    className=' object-cover h-full rounded-tr-[50px] ' />
            </div>
        </section>
    )
}

export default Hero
