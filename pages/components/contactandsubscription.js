import React from 'react'
import Contact from './contact'
import Subscription from './subscription'

const ContactAndsubscription = () => {
    return (
        <div className='w-full h-fit lg:py-32 py-12 px-[24px] md:px-[64px] lg:px-[100px] flex lg:flex-row  gap-7 lg:gap-0 flex-col items-start justify-evenly'>
            <Contact />
            <div className='lg:h-[30vh] h-0 w-[2px] bg-black self-center'></div>
            <Subscription />
        </div>
    )
}

export default ContactAndsubscription