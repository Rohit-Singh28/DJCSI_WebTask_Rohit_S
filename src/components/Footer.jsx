import React from 'react'
import Google from '../assets/Logo/Google.png'
import Instagram from '../assets/Logo/Instagram.jpg'
import facebook from '../assets/Logo/facebook.png'


const Footer = () => {
    return (
        <div className='md:h-[320px] mx-4 mt-14 flex flex-col md:flex-row md:place-content-evenly text-black-300 py-8  items-center gap-6 md:gap-0'>
            <div className='    w-[340px] md:w-[300px] space-y-4'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptatibus.
                </p>
                    <div className='flex gap-4'>
                        <img src={Google} alt="" className='w-[30px] h-[20px]'/>
                        <img src={facebook} alt=""  className='w-[20px] h-[20px]'/>
                        <img src={Instagram} alt=""  className='w-[20px] h-[20px]'/>
                    </div>
            </div>
            <div className= ' flex flex-col md:flex-row gap-8 md:gap-12'>
                <div className='flex place-content-between gap-10 md:gap-16'>
                <ul className='space-y-3'>
                    <li className='text-xl font-semibold'>Home</li>
                    <li>Booking</li>
                    <li>Facilities</li>
                    <li>Location</li>
                    <li>Contact</li>
                </ul>
                <ul className='space-y-3'>
                    <li className='text-xl font-semibold'>Help</li>
                    <li>About us</li>
                    <li>Help center</li>
                    <li>Privacy policy</li>
                    <li>FAQs</li>
                </ul>
                <ul className='space-y-3'>
                    <li className='text-xl font-semibold'>Get the app</li>
                    <li>IOS app</li>
                    <li>Android app</li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
