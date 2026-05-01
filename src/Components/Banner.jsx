import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import education from '../Assets/Education.svg'

const Banner = () => {
    return (
        <div className='container mx-auto py-20'>
            <div className=' flex justify-between
             items-center'>
                <div className='w-1/2 space-y-3.5'>
                    <p className='px-2 py-1 bg-[#86F2E4] inline-block rounded-4xl'>New Courses Avaiable</p>
                    <h2 className='text-[#1A146B] text-5xl font-bold'>Upgrade Your Skills Today 🚀</h2>
                    <p>Learn from Industry Experts and accelerate your career with our professional-grade curriculum designed for modern innovators.</p>
                    <div className='space-x-2'>
                        <Button className='bg-[#1A146B] rounded-xl p-6'>Browse Cataloge</Button>
                        <Button className='bg-[#FFDBCA] rounded-xl p-6 text-black'>Enroll Now</Button>
                    </div>
                </div>
                <div className=''>
                    <Image src={education} alt='' height={500} width={500}></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;