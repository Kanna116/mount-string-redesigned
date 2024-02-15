import React, { useState } from 'react'
import { reviews } from '../constants'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";

const Reviews = () => {
    const ratingStars = (rating) => {
        let stars = []
        for (let i = 0; i < rating-1; i++) {
         stars[i]=  1;
        }
        return stars;

    }

    return (
        <div className='w-full h-[80vh] px-[24px] md:px-[64px] lg:px-[100px] py-10 mb-10'>
            <h1 className='text-center text-3xl font-semibold'>Here what our People Say</h1>
            <div className='w-full mt-5  h-full gap-7 flex flex-col items-center overflow-x-hidden overflow-y-scroll py-5'>
                {reviews.map((item, index) => {
                    const { name, date, review, image, rating } = item
                    return (<div key={index} className='lg:w-[50vw] w-fit h-fit max-h-[30vh] flex gap-3 lg:gap-10 lg:items-center items-start justify-start'>
                        <div className="profile lg:h-3/4 h-1/3 shrink-0 aspect-square rounded-full overflow-hidden ">
                            <Image
                                src={image}
                                width={500}
                                height={500}
                                alt='reviewer image'
                                className='w-full h-full object-cover'
                                draggable={false}
                            />
                        </div>
                        <div className=' w-full flex flex-col items-start justify-center gap-2'>
                            <h1 className='font-primary text-xl font-semibold'>{name}</h1>
                            <div className='flex gap-1 items-center'>
                                {
                                    ratingStars(rating).map((item,index)=><span key={index} className='text-[#ffff00]'><FaStar /></span> )
                                    
                                }
                                ({rating})
                            </div>
                            <p className='lg:text-sm text-xs'>{review}</p>
                            <h4>{date}</h4>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Reviews