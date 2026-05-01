import Image from 'next/image';
import React from 'react';
import SarahMitchell from '../Assets/Sarah Mitchell.png'
import DavidChen from '../Assets/David Chen.png'
import ElenaRodriguez from '../Assets/Dr. Elena Rodriguez.png'
import MarcusThorne from '../Assets/Marcus Thorne.png'

const Instructor = () => {
    return (
        <div className='bg-[#1A146B] p-20'>
            <div className='container mx-auto'>
                <h1 className='text-3xl text-center font-bold text-white'>Learn from Global Leaders</h1>
                <p className='text-gray-500 text-center mt-2'>Our instructors are veterans from Fortune 500 companies, research labs, and world-
                    class universities.</p>

                <div className='grid grid-cols-1 md:grid-cols-4 mt-15'>
                    <div className='flex flex-col items-center space-y-3'>
                        <Image className='rounded-full text-center' src={SarahMitchell} alt='Instructor'></Image>
                        <p className='text-2xl font-semibold text-white'>Sarah Mitchell</p>
                        <p className='text-[14px] font-medium text-gray-400'>Software Engineering Lead</p>
                    </div>
                    <div className='flex flex-col items-center space-y-3'>
                        <Image className='rounded-full text-center' src={DavidChen} alt='Instructor'></Image>
                        <p className='text-2xl font-semibold text-white'>David Chen</p>
                        <p className='text-[14px] font-medium text-gray-400'>Principal Product Designer</p>
                    </div>
                    <div className='flex flex-col items-center space-y-3'>
                        <Image className='rounded-full text-center' src={ElenaRodriguez} alt='Instructor'></Image>
                        <p className='text-2xl font-semibold text-white'>Elena Rodriguez</p>
                        <p className='text-[14px] font-medium text-gray-400'>Director of Data Science</p>
                    </div>
                    <div className='flex flex-col items-center space-y-3'>
                        <Image className='rounded-full text-center' src={MarcusThorne} alt='Instructor'></Image>
                        <p className='text-2xl font-semibold text-white'>Marcus Thorne</p>
                        <p className='text-[14px] font-medium text-gray-400'>Business Transformation Consultant</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;