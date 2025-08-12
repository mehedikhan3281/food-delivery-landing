import React from 'react';
import { FaFacebook, FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='py-16 bg-gray-800'>
            <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div>
                    <div className='flex items-center space-x-2'>
                        <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                            <MdDeliveryDining className='w-6 h-6 text-black'/>
                        </div>
                        <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>
                            BD Food
                        </h1>
                    </div>
                    <p className='mt-4 text-gray-200 font-medium'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur nobis modi rem minima eum. 
                    </p>
                    <div className='mt-6 flex items-center space-x-2'>
                        <div className='flex items-center justify-center flex-col w-8 h-8 bg-blue-600 text-white rounded-full'>
                            <FaFacebookF/>
                        </div>
                        <div className='flex items-center justify-center flex-col w-8 h-8 bg-pink-500 text-white rounded-full'>
                            <FaInstagram/>
                        </div>
                        <div className='flex items-center justify-center flex-col w-8 h-8 bg-sky-400 text-white rounded-full'>
                            <FaTwitter/>
                        </div>
                        <div className='flex items-center justify-center flex-col w-8 h-8 bg-red-600 text-white rounded-full'>
                            <FaYoutube/>
                        </div>
                    </div>
                </div>

                <div className='space-y-5'>
                    <h1 className='text-lg font-bold text-white'>Company </h1>
                    <p className='footer_link'>About Us</p>
                    <p className='footer_link'>News & Press</p>
                    <p className='footer_link'>Our Customers</p>
                    <p className='footer_link'>Leadership</p>
                    <p className='footer_link'>Careers</p>
                </div>

                <div className='space-y-5'>
                    <h1 className='text-lg font-bold text-white'>Resources </h1>
                    <p className='footer_link'>Blog</p>
                    <p className='footer_link'>Webinar & Events</p>
                    <p className='footer_link'>Podcast</p>
                    <p className='footer_link'>E-book & Guides</p>
                </div>

                <div>
                    <h1 className='text-lg font-bold text-white'>Contact Us</h1>
                    <div className='mt-6'>
                        <h1 className='text-sm text-white'>Our Mobile Number</h1>
                        <h1 className='text-base font-bold text-yellow-300'>+880XXXXXXXXXX</h1>
                    </div>
                    <div className='mt-6'>
                        <h1 className='text-sm text-white'>Our Email</h1>
                        <h1 className='text-base font-bold text-yellow-300'>email@example.com</h1>
                    </div>
                </div>
            </div>

            <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
                <p className='text-center text-white md:text-left'>Copyright © 2025 BD Food. All rights reserved</p>
                <div className='flex items-center text-white space-x-4 mt-4 md:mt-0'>
                    <span>Social : </span>
                    <span className='hover:text-gray-500 text-white'>
                        <FaFacebook/>
                    </span>
                    <span className='hover:text-gray-500 text-white'>
                        <FaTwitter/>
                    </span>
                    <span className='hover:text-gray-500 text-white'>
                        <FaPinterest/>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;