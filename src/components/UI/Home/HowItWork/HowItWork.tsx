import React from 'react';
import HowItWorkCard from './HowItWorkCard';

const steps = [
  {
    num: '01',
    image: '/images/w1.png',
    title: 'Become a Delivery Man',
    description: 'Join our delivery team and start earning while delivering happiness.'
  },
  {
    num: '02',
    image: '/images/w2.png',
    title: 'Become a Partner',
    description: 'Partner with us to grow your business and reach more customers.'
  },
  {
    num: '03',
    image: '/images/w3.png',
    title: 'Try Android/iOS App',
    description: 'Download our mobile app for a seamless ordering experience.'
  }
];

const HowItWork = () => {
  return (
    <div className="py-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">How It Works</h1>
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay={index * 100}
            key={step.num}
            >
            <HowItWorkCard key={step.num} {...step} />
          </div>

        ))}
      </div>
    </div>
  );
};

export default HowItWork;
