import React from 'react'
import { motion } from 'framer-motion'

const Card2 = ({title,icon}) => {
  return (
    <motion.div 
      initial={{opacity:0,rotate:-90}}
      whileInView={{opacity:1,rotate:0}}
      transition={{duration:0.6,delay:0.8}}
      viewport={{ once: true }}
      className='text-center  flex flex-col w-[120px] h-[140px] md:w-[150px] mx-auto md:h-[170px] justify-center items-center gap-5 hover:shadow-xl duration-300 shadow-md rounded-md my-4'>
        <div className='text-green-500 text-3xl'>
        {icon}
        </div>
        <p className='text-xs'>{title}</p>
    </motion.div>
  )
}

export default Card2
