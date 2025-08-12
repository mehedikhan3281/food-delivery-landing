import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  { icon: "/images/f1.svg", title: "Analytics Business" },
  { icon: "/images/f2.svg", title: "Wide Coverage Map" },
  { icon: "/images/f3.svg", title: "Artificial Intelligence" },
  { icon: "/images/f4.svg", title: "Real-Time Tracking" },
  { icon: "/images/f5.svg", title: "24/7 Customer Support" },
  { icon: "/images/f6.svg", title: "Fast & Secure Payments" }
];

const Feature = () => {
  return (
    <div className='py-16'>
      <h1 className='text-xl sm:text-2xl text-center font-extrabold'>
        Our Features
      </h1>
      <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center mt-16'>
        {features.map((feature, index) => (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={index * 100}
            key={index}
          >
            <FeatureCard  icon={feature.icon} title={feature.title} />
          </div>

        ))}
      </div>
    </div>
  );
};

export default Feature;
