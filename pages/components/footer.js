import Image from 'next/image';
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { companyDetails, footerLinks } from '../constants';
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {

    const { name, address, logo, phone, mail } = companyDetails;

    //to make a constant changing year in copyrights
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <div className='w-full h-[70vh] relative shadow-[0px_-10px_20px_#00000005] flex items-start justify-center px-24 lg:px[64px] md:px-[64px]'>
            {/* company details */}
            <div className="company-details w-1/3 h-full flex flex-col items-start justify-start gap-5">
                <div className="logo w-[150px] p-5 aspect-square">
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
            {/* Links */}
            <div className="links w-2/3 h-full flex items-start justify-start">
                {
                    footerLinks.map((item, index) => {
                        return (
                            <div key={index} className='w-full pt-[150px] flex flex-col items-start gap-5 justify-start'>
                                <h1 className='text-xl font-semibold'>{item.head}</h1>
                                <ul className='list-none'>
                                    {item.links.map((link, index) => {
                                        return <li className='cursor-pointer'>{link}</li>
                                    })}
                                </ul>
                            </div>
                        )
                    })
                }
                <div className='w-full pt-[150px] flex flex-col items-start gap-5 justify-start'>
                    <h1 className='text-xl font-semibold'>Connect with us</h1>
                    <div className='flex items-center justify-between gap-5'>
                        <span className='text-3xl text-pink-700'><FaInstagram /></span>
                        <span className='text-3xl text-blue-600'><FaFacebook /></span>
                        <span className='text-3xl text-red-600'><FaYoutube /></span>
                    </div>
                </div>
            </div>


            {/* copyright */}
            <h3 className='absolute bottom-10 left-10 flex items-center gap-2'>Copyright <span><FaRegCopyright /></span> {currentYear} Mount String Technologies</h3>

        </div>
    )
}

export default Footer