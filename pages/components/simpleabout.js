import React from 'react'

const SimpleAbout = () => {
  return (
    <div className='w-full py-20 flex flex-col items-center justify-center gap-5 px-[24px]'>

        <h1 className='w-full lg:w-fit md:w-fit text-4xl font-bold text-center'>Welcome to Mount String Technologies Pvt. Ltd.</h1>
        <p className='w-full md:w-3/4 lg:w-1/2 text-center '>We are a software company that provides innovative solutions for businesses. Our team of experts is dedicated to delivering high-quality products that meet your needs. Explore our website to learn more about our services.</p>
        <button className='px-8 font-semibold py-2 bg-black rounded-full text-white'>See More</button>
    </div>
  )
}

export default SimpleAbout