import React from 'react'
import { IoMdArrowUp } from "react-icons/io";

const ScrollToTopBtn = () => {
    return (
        <div className='absolute lg:bottom-10 bottom-24 right-10 w-[40px] aspect-square rounded-full bg-black grid place-items-center'><span className='text-white text-xl'><IoMdArrowUp /></span></div>
    )
}

export default ScrollToTopBtn