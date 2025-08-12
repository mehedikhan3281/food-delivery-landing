import Image from 'next/image';
import React from 'react';
import { FaApple, FaGooglePay } from 'react-icons/fa';

const MobileApp = () => {
    return (
        <div className='py-16'>
            <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center'>
                <Image
                    src='/images/app.png'
                    alt='app'
                    width={800}
                    height={800}
                    className='object-cover'
                    data-aos="zoom-in"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay='0'
                />
                <div>
                    <h1 className='text-2xl sm:text-4xl font-bold leading-8 sm:leading-12'>
                        Download from iTune & Play Store
                    </h1>
                    <p className='mt-6 text-sm sm:text-base text-gray-800 leading-6 sm:leading-8 dark:text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusamus reiciendis voluptates dignissimos alias laboriosam eveniet consequatur aspernatur vero dolor totam maxime nihil nam sequi maiores ad, magni, omnis exercitationem.
                    </p>
                    <div className='sm:flex space-y-3 sm:space-y-0 space-x-4 mt-8'>
                        <a href="#_" className='flex w-fit items-center ground border border-gray-400 px-4 py-3 rounded-md bg-gray-950 transition-all duration-300'>
                            <FaApple className='text-2xl mr-2 text-white transition-all duration-300' />
                            <div>
                                <p className='text-xs text-white transition-all duration-300'>Download on the</p>
                                <p className='text-sm font-semibold text-white transition-all duration-300'>App Store</p>
                            </div>
                        </a>
                        <a href="#_" className='flex w-fit items-center ground border border-gray-400 px-4 py-3 rounded-md bg-gray-950 transition-all duration-300'>
                            <FaGooglePay className='text-2xl mr-2 text-white transition-all duration-300' />
                            <div>
                                <p className='text-xs text-white transition-all duration-300'>Download on the</p>
                                <p className='text-sm font-semibold text-white transition-all duration-300'>Google Play</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileApp;