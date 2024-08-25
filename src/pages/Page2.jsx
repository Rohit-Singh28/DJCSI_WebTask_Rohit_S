import React from 'react'
import image1 from "../assets/Bonus/DJCSI Technical Tasks (1).png"
import image2 from "../assets/Bonus/DJCSI Technical Tasks (2).png"
import image3 from "../assets/Bonus/DJCSI Technical Tasks (3).png"
import { motion } from "framer-motion"
import Card1 from '../components/Card1'


const Page2 = () => {
    return (
        <section className=' my-12 mt-24 md:my-32  px-4 md:px-16  flex flex-col gap-10'>
            <div className='space-y-7'>
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className='text-2xl md:text-4xl font-semibold'>Our most popular Hotels</motion.h1>
                <div className='flex'>
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}

                        className='text-md md:text-md text-gray-800  opacity-80 w-[70%] md:w-[30%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nesciunt.
                    </motion.p>
                    <div className='ml-auto'>
                        <button
                            className='bg-green-200 hover:text-white hover:bg-green-500 duration-300 text-sm text-green-700 px-4 py-2 rounded-3xl'>View All</button>
                    </div>
                </div>
            </div>

            <motion.div
               
                className='flex flex-col md:flex-row md:place-content-between items-center gap-4 px-6 lg:px-8 overflow-x-scroll hide'>
                <Card1
                    image={image1}
                    title={"Danubius Hotel Regents Park"}
                />
                <Card1
                    image={image2}
                    title={"The Resident Soho"}
                />
                <Card1
                    image={image3}
                    title={"London Bridge Hotel"}
                />
            </motion.div>

        </section>
    )
}

export default Page2
