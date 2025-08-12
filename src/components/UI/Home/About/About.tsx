import Image from 'next/image';
import React from 'react';

const features = [
  {
    id: '01',
    title: 'Easy to Use Application',
    desc: 'Order your favorite meals in just a few taps with our clean and simple interface.'
  },
  {
    id: '02',
    title: 'Fast & Reliable Delivery',
    desc: 'Get hot and fresh food delivered to your doorstep in record time.'
  },
  {
    id: '03',
    title: 'Wide Variety of Restaurants',
    desc: 'Choose from hundreds of local and international cuisines, all in one place.'
  }
];

const About = () => {
  return (
    <div className='py-16'>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* Image */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
        >
          <Image
            src='/images/a.png'
            alt='About Us'
            width={800}
            height={800}
          />
        </div>

        {/* Text Content */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
        >
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-8 md:leading-12'>
            We deliver the best quality food to your doorstep
          </h1>
          <p className='mt-4 leading-6 sm:leading-8 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base'>
            Our mission is to connect you with your favorite meals from the best local and international restaurants. Whether it’s breakfast, lunch, or dinner, we ensure fresh, tasty, and hygienic food every time.
          </p>
          <div className='mt-8 space-y-8'>
            {features.map(({ id, title, desc }) => (
              <div key={id} className='flex items-center space-x-6'>
                <p className='text-3xl md:text-5xl opacity-40 font-bold'>{id}</p>
                <div>
                  <h1 className='text-base sm:text-lg font-extrabold'>{title}</h1>
                  <p className='mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base'>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
