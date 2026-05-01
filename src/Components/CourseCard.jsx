import Image from 'next/image';
import React from 'react';

const CourseCard = ({ data }) => {
    return (
        <div>
            <div className="max-w-sm rounded-2xl overflow-hidden h-full shadow-md bg-white">

                {/* Image */}
                <div className="relative w-full h-52">
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="p-4">

                    {/* Rating */}
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                        <span className="text-orange-500 mr-1">★</span>
                        <span className="font-medium">{data.rating}</span>
                        <span className="ml-1">(1.2k reviews)</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-indigo-900 mb-2">
                        {data.title}
                    </h2>

                    {/* Instructor */}
                    <p className="text-sm text-gray-500 mb-4">
                        By {data.instructor}, Senior Dev at TechFlow
                    </p>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 h-1.5 rounded-full mb-4">
                        <div className="bg-teal-600 h-1.5 rounded-full w-3/4"></div>
                    </div>

                    {/* Button */}
                    <button className="w-full border border-indigo-500 text-indigo-600 py-2 rounded-lg font-medium hover:bg-indigo-50 transition">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;