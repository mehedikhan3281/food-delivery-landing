"use client"
import ThemeToggoler from '@/components/Helper/ThemeToggoler';
import { NavLinks } from '@/Constant/Constant';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { MdDeliveryDining } from 'react-icons/md';

type NavProps = {
    navOpen: () => void;
};

const Nav = ({navOpen}: NavProps) => {

    const [navBg, setNavBg] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) {
                setNavBg(true);
            }

            if (window.scrollY < 90) {
                setNavBg(false);
            }

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            }

        }}, [])
    return (
        <div className={`transition-all ${navBg ? "bg-white dark:bg-gray-900 shadow-md" : "fixed"} duration-200 h-[12vh] z-[100] fixed w-full`}>
            <div className="flex items-center justify-between w-[90%] xl:w-[80%] h-full mx-auto">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-blue-950 dark:bg-white  rounded-full flex items-center justify-center flex-col">
                        <MdDeliveryDining className='w-6 h-6 text-white dark:text-black'/>
                    </div>
                    <h1 className="text-xl hidden sm:block md:text-2xl text-black dark:text-white font-bold">BD Food</h1>
                </div>
                <div className='hidden lg:flex items-center space-x-10'>
                    {NavLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.url}
                            className='text-black dark:text-white hover:text-green-700 dark:hover:text-green-400  transition-all font-bold duration-200'
                        >
                            <p>{link.Label}</p>
                        </Link>
                    ))}
                </div>

                <div className='flex items-center space-x-4'>

                    <button className='bg-blue-950 dark:bg-white dark:text-black dark:hover:bg-gray-200 py-2.5 px-8 text-white font-bold rounded-lg hover:bg-black transition-all duration-300 cursor-pointer'>Join Now</button>
                    <ThemeToggoler />
                    <HiBars3BottomRight 
                    onClick={navOpen}
                    className='w-8 h-8 cursor-pointer text-blue-950 lg:hidden dark:text-white'/>
            </div> 
                </div>
        </div>
    );
};

export default Nav;