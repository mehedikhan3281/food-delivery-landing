import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';

const Hero = () => {
    return (
        <div className='relative w-full h-screen flex justify-center flex-col'>
            <div className='w-[90%] md:w-[80%] mx-auto grid items-center grid-cols-1 xl:grid-cols-2 gap-10'>
                {/* text content  */}
                <div>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[2.5rem] md:leading-[4rem]'>
                        Taste the <span className='text-pink-600'>Best</span> Food in Town
                    </h1>
                    <p className='text-sm md:text-base font-medium text-gray-800  dark:text-gray-400 mt-4 '>
                        Discover a variety of delicious meals delivered right to your doorstep. Enjoy the best culinary experiences with us.
                    </p>
                    {/* address input  */}
                    <div className='w-full mb-8 max-w-md'>
                        <div className='flex items-center h-14 overflow-hidden bg-gray-100 shadow-md'>
                             <div className='px-4 text-gray-500'>
                                <GrMapLocation className='w-5 h-5 text-black'/>
                             </div>
                            <input
                                type="text"
                                placeholder='Enter your address'
                                className='flex-1 text-sm text-black bg-transparent outline-none h-full '
                            />
                            <button className='bg-gray-900 text-white hover:text-gray-800 flex items-center justify-center'>
                                <FaLocationArrow className='w-4 h-4'/>
                                Find Food
                            </button>
                        </div>
                    </div>
                </div>
                {/* image content  */}
                <div className='flex justify-center'>
                    <img src="/images/hero-image.png" alt="Delicious Food" className='w-full h-auto max-w-md' />
                </div>
            </div>
        </div>
    );
};

export default Hero;