"use client"

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1224 }, items: 2 },
  tablet: { breakpoint: { max: 1224, min: 764 }, items: 1 },
  mobile: { breakpoint: { max: 764, min: 0 }, items: 1 },
};

const reviews = [
  { reviewTitle: "Great Work!", userName: "John Doe", userImage: "/images/c1.png", role: "App Developer" },
  { reviewTitle: "Creative!", userName: "Justin Trudo", userImage: "/images/c2.png", role: "Lawyer" },
  { reviewTitle: "Outstanding Service!", userName: "Emily Clark", userImage: "/images/c3.png", role: "Designer" },
];

const ClientReview = () => (
  <div className='py-16'>
    <h1 className='text-xl sm:text-2xl text-center font-extrabold'>What people say about us</h1>
    <div className='mt-16 w-[80%] mx-auto'>
      <Carousel
        showDots={false}
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
      >
        {reviews.map(({ reviewTitle, userName, userImage, role }, i) => (
          <ReviewCard
            key={i}
            reviewTitle={reviewTitle}
            userName={userName}
            userImage={userImage}
            role={role}
          />
        ))}
      </Carousel>
    </div>
  </div>
);

export default ClientReview;
