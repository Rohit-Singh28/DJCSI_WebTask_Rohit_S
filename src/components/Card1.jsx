import React from 'react'
import { IoStarOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { motion } from "framer-motion"


const Card1 = ({ title, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}>
            <div
                className="pb-4 h-[330px] w-[310px] md:h-[450px] md:w-[450px] border-slate-400  hover:opacity-[0.4]  shadow-md rounded-xl  duration-500 place-content-between">
                <div
                    className="h-[70%]  overflow-hidden rounded-tl-xl rounded-tr-xl ">
                    <img src={image} alt=""
                        className="h-[100%] w-[100%] object-cover" />
                </div>
                <div
                    className='h-[30%] flex flex-col place-content-between'>
                    <div
                        className="m-2 space-y-2 flex-1">
                        <p
                            className="text-green-500 text-[0.7rem]"> London NWS 7JT England</p>
                        <p
                            className="font-semibold text-lg"> {title}</p>
                    </div>
                    <div
                        className='m-2 flex  place-content-between'>
                        <p
                            className='mu-2 text-[0.8rem]'>$200 per Night</p>
                        <p
                            className='flex gap-2 items-center'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarOutline /><span className='mx-2'>4.8</span>
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Card1
