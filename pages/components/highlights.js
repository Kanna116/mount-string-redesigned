import Image from 'next/image'
import React from 'react'
import { highlights } from '../constants'

const Highlights = () => {
    return (
        <div className='w-full lg:px-[100px] md:px-[64px] px-[24px] flex flex-col gap-20 items-center py-10'>
            <h1 className='lg:text-3xl text-2xl font-bold font-primary  text-center'>We make possibilities into actions!</h1>

            {
                highlights.map((item, index) =>
                    <div key={index}  className={`w-full lg:h-[75vh] h-fit flex flex-col  px-0 items-center justify-center lg:gap-10 gap-0 lg:px-20 ${(index + 1)%2 !== 1 ? "lg:flex-row" : "lg:flex-row-reverse" }`}>
                        <div className='flex flex-col items-start justify-center lg:w-1/2 w-full h-full'>
                            <h1 className='text-3xl font-semibold'>{item.title}</h1>
                            <p className='lg:w-3/4 w-full mt-5'>{item.desc}</p>
                        </div>
                        <div className='lg:w-1/2 w-full h-full mt-8 lg:mt-0'>
                            <Image
                                src={item.image}
                                width={1000}
                                height={1000}
                                draggable={false}
                                alt='Our Highlight'
                                className='w-full h-full object-cover'
                            />
                        </div>

                    </div>)
            }

        </div>
    )
}

export default Highlights