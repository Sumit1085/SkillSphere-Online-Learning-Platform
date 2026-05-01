import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import education from '../Assets/Education.svg';

const Banner = () => {
  return (
    <div className='container mx-auto px-4 py-12 md:py-20'>
      <div className='flex flex-col-reverse md:flex-row items-center gap-10'>
        
        {/* Text Section */}
        <div className='w-full md:w-1/2 space-y-4 text-center md:text-left'>
          <p className='px-3 py-1 bg-[#86F2E4] inline-block rounded-full text-sm'>
            New Courses Available
          </p>

          <h2 className='text-[#1A146B] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'>
            Upgrade Your Skills Today 🚀
          </h2>

          <p className='text-gray-600 text-sm sm:text-base'>
            Learn from Industry Experts and accelerate your career with our 
            professional-grade curriculum designed for modern innovators.
          </p>

          <div className='flex flex-col sm:flex-row gap-3 justify-center md:justify-start'>
            <Button className='bg-[#1A146B] text-white rounded-xl px-6 py-4'>
              Browse Catalogue
            </Button>
            <Button className='bg-[#FFDBCA] text-black rounded-xl px-6 py-4'>
              Enroll Now
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <Image
            src={education}
            alt='Education Illustration'
            className='w-[80%] sm:w-[70%] md:w-full max-w-md'
            priority
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;