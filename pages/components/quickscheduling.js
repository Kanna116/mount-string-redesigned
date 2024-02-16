import React from 'react'
import { quickscheduling } from '../constants'

const QuickScheduling = () => {
    return (
        <div className='w-full lg:h-[40vh] h-fit flex  flex-col items-center justify-center lg:px-[100px] md:px-[64px] px-[24px] my-5 py-10 gap-7'>
            <h1 className='text-3xl lg:w-3/4 w-full font-semibold leading-none text-center'>{quickscheduling.text}</h1>
            <button className='px-10 py-2 bg-black  text-white text-xl rounded-full'>Schedule a Quick Meeting</button>
        </div>
    )
}

export default QuickScheduling