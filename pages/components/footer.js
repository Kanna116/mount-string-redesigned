import Image from 'next/image'
import React from 'react'
import { companyDetails } from '../constants'

const Footer = () => {

    const { name, address, logo, phone, mail } = companyDetails

    return (
        <div className='w-full h-[70vh] shadow-[0px_-10px_20px_#00000005] flex items-start justify-center px-24 lg:px[64px] md:px-[64px]'>
            <div className="company-details w-1/3 h-full flex flex-col items-start justify-start gap-5">
                <div className="logo w-[200px] p-5 aspect-square">
                    <Image
                        src={logo}
                        width={500}
                        height={500}
                        alt='company logo'
                        draggable={false}
                        className='w-full h-full object-cover select-none' />
                </div>
                <h1 className='text-lg font-semibold'>{name}</h1>
                <p className='text-xs w-2/3'>{address}</p>
                <div className='mt-7'>
                    <h4 className='text-base text-blue-600'>{phone}</h4>
                    <h4 className='text-base text-blue-600'>{mail}</h4>
                </div>

            </div>

            <div className="links w-2/3 h-full bg-red-100">
            </div>

        </div>
    )
}

export default Footer