import React from 'react'
import { currentOpenings } from '../constants'

const CurrentOpenings = () => {
    return (
        <div className='current-openings lg:w-1/2 w-full'>
            <h1 className='text-3xl font-semibold'>Current Openings</h1>
            <div className='w-full h-fit flex flex-wrap items-start justify-start gap-2 mt-7'>
                {
                    currentOpenings.map((item, index) => {
                        return (
                            <div key={index} className='h-fit lg:w-[45%] w-full  shrink-0 flex flex-col items-start  gap-2 p-5 rounded-md  hover:shadow-lg transition-all duration-300 '>
                                <h1 className='text-xl font-semibold'>{item.title}</h1>
                                <p className='text-xs'>{item.desc}</p>
                                <a
                                    className='w-fit h-fit'
                                    href={item.link}>
                                    <button
                                        className='px-5 py-2 bg-black text-white rounded-full mt-3'
                                    >Apply</button>
                                </a>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default CurrentOpenings