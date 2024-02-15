import React, { useState } from 'react'
import { reviews } from '../constants'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";

const Reviews = () => {
    return (
        <div className='w-full h-[80vh] px-[24px] md:px-[64px] lg:px-[100px] py-10'>
            <h1 className='text-center text-3xl font-semibold'>Here what our People Say</h1>
            <div className='w-full mt-5 h-full bg-red-400'>
                {reviews.map((item, index) => {
                    const { name, date, review, image,rating } = item



                    return (<div className='w-full h-fit flex gap-3'>
                        <div className="profile ">
                            <Image
                                src={image}
                                width={500}
                                height={500}
                                alt='reviewer image'
                                draggable={false}
                            />
                        </div>
                        <div className='flex flex-col items-start justify-center gap-2'>
                            <h1>{name}</h1>
                            <h4>{rating}</h4>
                            <p>{review}</p>
                            <h4>{date}</h4>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Reviews