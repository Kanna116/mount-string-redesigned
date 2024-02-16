import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[70vh] shadow-[0px_-10px_20px_#00000005] flex items-start justify-center px-24 lg:px[64px] md:px-[64px]'>
        <div className="company-details w-1/3 h-full flex flex-col items-start justify-start gap-5">
            <div className="logo w-[150px] p-5 aspect-square ">
                <Image
                src={'/images/mount-string-logo.webp'}
                width={500}
                height={500}
                alt='company logo'
                draggable={false}
                className='w-full h-full object-contain select-none' />
            </div>

        </div>

        <h1></h1>
        <div className="links w-2/3 h-full bg-red-100"></div>

    </div>
  )
}

export default Footer