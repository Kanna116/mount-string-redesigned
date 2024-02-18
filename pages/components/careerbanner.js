import Image from 'next/image'
import React from 'react'

const CareerBanner = () => {
    return (
        <div className='mt-20 px-[24px] md:px-[64px] lg:px-[100px] h-fit flex flex-col lg:flex-row md:flex-row items-center justify-evenly'>
            <div className=''>

                <h1 className='lg:text-5xl text-4xl font-bold'>You know what.<br /> We are hiring</h1>
                <h3 className='text-2xl font-semibold mt-5'>Join Our Team</h3>
                <p className='w-3/4'>If you're interested in one of our open positions, start by applying here and attaching your resume.</p>
            </div>
            <div className='lg:h-[40vh] h-[20vh] mt-10 lg:mt-0 aspect-square '>
                <Image
                    src={'/images/mount-string-logo.webp'}
                    width={1000}
                    height={1000}
                    draggable={false}
                    alt='Logo Of Mount String Company'
                    className='w-full h-full object-contain' />

            </div>

        </div>
    )
}

export default CareerBanner