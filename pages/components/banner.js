import React from 'react'
import { banner } from '../constants'

const Banner = () => {
    const { text, image } = banner;
    return (
        <div style={{ background: `url(${image})` }} className='w-full lg:h-[40vh] h-fit flex lg:flex-row flex-col items-center justify-between lg:px-[100px] md:px-[64px] px-[24px] my-5 py-10 gap-10'>
            <h1 className='text-5xl lg:w-3/4 w-full font-semibold leading-none'>{text}</h1>
            <button className='px-5 py-2 bg-black  text-white text-xl rounded-full'>Contact US</button>
        </div>
    )
}

export default Banner