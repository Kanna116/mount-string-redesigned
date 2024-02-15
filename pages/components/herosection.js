import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div  className='lg:pl-[100px] md:pl-[64px] px-[24px]  w-full   flex lg:flex-row md:flex-row flex-col gap-10 items-center py-10 lg:py-0 justify-between md:h-fit h-fit lg:h-[90vh]'>
            <div className="left h-full w-full lg:w-1/3 md:w-1/2 sm:w-2/3  flex flex-col items-start justify-center gap-5">
                <h1 className='text-5xl font-bold font-primary'>Weaving the Threads of future technology</h1>
                <p className='text-sm'>With great passion towards technology and modern ways our dedicated team of experts provide high quality products that meet you needs.</p>
                <div className='w-full h-fit flex flex-wrap gap-3 '>
                    <button className='px-8 font-semibold py-2 bg-black rounded-full text-white'>See Our Products</button>
                    <button className='px-5 font-semibold py-2 border-2 border-black rounded-full ml-0 lg:ml-5'>Contact</button>
                </div>
            </div>
            <div className="right w-full lg:w-1/2 md:w-1/2 h-[50vh] lg:h-full md:h-full bg-red-100">
                <Image
                    src={'/images/hero-image.png'}
                    width={1000}
                    height={1000}
                    className='w-full h-full object-cover'
                    alt='image of productivity at mount strings'
                />
            </div>

        </div>
    )
}

export default HeroSection