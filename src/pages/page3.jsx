import React from 'react'
import Card2 from '../components/Card2'
import { PiDesktopBold } from "react-icons/pi";
import { LuParkingCircle } from "react-icons/lu";
import { TbCoffee } from "react-icons/tb";
import { IoWifiSharp } from "react-icons/io5";
import { MdElectricBolt } from "react-icons/md";
import { TbSwimming } from "react-icons/tb";
import { PiDotsThreeOutlineBold } from "react-icons/pi";
import { BiDumbbell } from "react-icons/bi";
import { motion } from 'framer-motion'


const Page3 = () => {


  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
  });

  return (
    <section className=' my-8 md:my-24 pt-10 px-4 md:px-16 flex flex-col lg:flex-row gap-12'>
      <div className='w-full lg:w-[400px] space-y-7 px-4 md:px-[50px]'>
        <motion.h1
          variants={container(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='text-3xl font-semibold '>
          We do our best facilities provide you
        </motion.h1>
        <motion.p
          variants={container(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='text-sm text-gray-700 opacity-70'>
          Lorem ipsum dolor sit amet consectetur adebitis odio voluptatum molestiae, sint eum. Esse facilis in quae nihil dolorem sequi voluptas exercitationem.
        </motion.p>
        <button className='bg-green-500 text-sm text-white px-4 py-2 rounded-3xl'>Contact Now</button>
      </div>
      <div className='w-full md:flex-1 grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 xl:pr-[200px] justify-center'>
        <Card2
          title={"Private WorkSpace"}
          icon={<PiDesktopBold />} />
        <Card2
          title={"Parking Area"}
          icon={<LuParkingCircle />} />
        <Card2
          title={"Breakfast"}
          icon={<TbCoffee />} />
        <Card2
          title={"Free Wifi"}
          icon={<IoWifiSharp />} />
        <Card2
          title={"Free Electricity"}
          icon={<MdElectricBolt />} />
        <Card2
          title={"Swimming Pool"}
          icon={<TbSwimming />} />
        <Card2
          title={"Exercise Space"}
          icon={<BiDumbbell />} />
        <Card2
          title={"Others"}
          icon={<PiDotsThreeOutlineBold />} />
      </div>
    </section>
  )
}

export default Page3
