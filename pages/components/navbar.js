import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CiUser } from "react-icons/ci";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdArrowOutward, MdClose } from "react-icons/md";
import { navlinks } from '../constants';
import Link from 'next/link';

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'visible';
            document.body.style.overflowX = 'hidden';

        };
    }, [menu]);



    return (
        <div className='w-full lg:px-[100px] md:px-[64px] px-[24px]  flex items-center justify-between h-20 fixed top-0 left-0 bg-white z-[100]'>
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
                {
                    navlinks.map((item, index) => {
                        return (
                            <Link
                                className='h-full'
                                href={item.link}
                                key={index} >
                                <li className='hover:bg-zinc-100 h-full grid place-items-center px-5 cursor-pointer hover:border-b-[1px] border-zinc-950'>{item.name}</li>
                            </Link>
                        )
                    })
                }
            </ul>


            <div className="account border-[0.5px] border-zinc-950 p-3 rounded-full hover:bg-zinc-100 hidden lg:block">
                <span className='text-2xl '>
                    <CiUser />
                </span>
            </div>

            {/* menu for mobiles */}
            <div>
                <div className="menu lg:hidden">
                    <span
                        className='text-2xl'
                        onClick={() => setMenu(true)}
                    >
                        <HiOutlineMenuAlt2 />
                    </span>
                    <ul style={{ transform: `translateX(${menu ? 0 : "-100%"})` }} className='h-full w-full fixed top-0 left-0  bg-zinc-100 flex flex-col  items-start justify-center gap-4 uppercase font-medium text-sm duration-300 ease-in-out tracking-wider  '>
                        <span
                            className='absolute text-4xl top-6 lg:right-[100px] md:right-[64px] right-[24px]'
                            onClick={() => setMenu(false)}>
                            <MdClose />
                        </span>
                        {
                            navlinks.map((item, index) => <li key={index} className='w-fit px-5 cursor-pointer text-2xl border-zinc-950 flex items-center duration-300 group [&>*]:duration-300 hover:translate-x-[30px]'><span className='scale-0 text-3xl group-hover:scale-100'><MdArrowOutward /></span>
                                <Link href={item.link} onClick={() => setMenu(false)}>{item.name}</Link>
                            </li>)
                        }
                        <div className='h-[0.1px] w-[90%] bg-zinc-900 mx-auto'></div>

                        <button className='text-lg uppercase font-semibold mx-10 bg-black px-8 py-2 text-white rounded-full'>Signup</button>
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Navbar