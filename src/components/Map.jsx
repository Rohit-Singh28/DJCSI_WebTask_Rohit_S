import React from 'react'

const Map1 = () => {
    return (
        <div className=' w-full'>
            <div className='w-[70%] hidden md:flex flex-col gap-4 mx-auto rounded-lg p-4 bg-white border relative top-[420px]'>
                <p className='text-xl font-semibold'>Location of Our Hotel</p>
                <div className='flex'>
                    <p className='w-[70%] text-sm opacity-75'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium nihil iusto consectetur architecto, rerum quae repellat soluta consequatur similique ipsum!
                    </p>
                    <button className='ml-auto bg-green-500 text-sm text-white px-4 py-2 rounded-3xl'>Contact</button>

                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8082424893355!2d72.82985679999997!3d19.116066500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9417f96b983%3A0xe8810855fae4941f!2sJuhu%20Circle!5e0!3m2!1sen!2sin!4v1723969925847!5m2!1sen!2sin"
                width="90%" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='mx-auto'></iframe>

        </div>
    )
}

export default Map1;
