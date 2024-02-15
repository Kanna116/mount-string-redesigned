import Image from 'next/image'
import React from 'react'
import { CiUser } from "react-icons/ci";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
    return (
        <div className='w-full   lg:px-[100px] md:px-[64px] px-[24px]  flex items-center justify-between h-20'>
            <div className="logo h-16 w-fit shrink-0">
                <Image
                    src={'/images/mount-string-logo.webp'}
                    width={500}
                    height={500}
                    alt='mount string logo'
                    className='w-fit h-full object-contain'
                    priority
                />
            </div>

            <ul className='h-full sm:hidden lg:flex hidden  items-center justify-between uppercase font-medium text-sm [&>*]:duration-100 tracking-wider  '>
                <li className='hover:bg-zinc-100 h-full grid place-items-center px-5 cursor-pointer hover:border-b-[1px] border-zinc-950'>Home</li>
                <li className='hover:bg-zinc-100 h-full grid place-items-center px-5 cursor-pointer hover:border-b-[1px] border-zinc-950'>Our services</li>
                <li className='hover:bg-zinc-100 h-full grid place-items-center px-5 cursor-pointer hover:border-b-[1px] border-zinc-950'>Development</li>
                <li className='hover:bg-zinc-100 h-full grid place-items-center px-5 cursor-pointer hover:border-b-[1px] border-zinc-950'>Blog</li>
                <li className='hover:bg-zinc-100 h-full grid place-items-center px-5 cursor-pointer hover:border-b-[1px] border-zinc-950'>Careers</li>
                <li className='hover:bg-zinc-100 h-full grid place-items-center px-5 cursor-pointer hover:border-b-[1px] border-zinc-950'>About Us</li>
                <li className='hover:bg-zinc-100 h-full grid place-items-center px-5 cursor-pointer hover:border-b-[1px] border-zinc-950'>HRMS</li>
                <li className='hover:bg-zinc-100 h-full grid place-items-center px-5 cursor-pointer hover:border-b-[1px] border-zinc-950'>EMS Portal</li>
            </ul>


            <div className="account border-[0.5px] border-zinc-950 p-3 rounded-full hover:bg-zinc-100 hidden lg:block">
                <span className='text-2xl '>
                    <CiUser />
                </span>
            </div>

            <div>
                <div className="menu lg:hidden">
                    <span className='text-2xl'>
                        <HiOutlineMenuAlt2 />
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Navbar