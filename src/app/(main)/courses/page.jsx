import { getCourseData } from "@/lib/data";
import { CircleFill } from "@gravity-ui/icons";
import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const CoursesPage = async () => {

    const datas = await getCourseData()
    return (
        <div className='bg-[#EFF4FF]'>
            <div className='container mx-auto p-20'>
                <h2 className='text-[#1A146B] text-5xl font-bold'>Explore Courses</h2>
                <p className='text-[#474651] mt-2'>Master new skills with our industry-leading professional directory.</p>

                <div className="grid grid-cols-3 gap-10 mt-10">
                    {
                        datas.map(data => (<div key={data.id}>
                            <div className="max-w-sm rounded-2xl overflow-hidden h-full shadow-md bg-white">

                                {/* Image */}
                                <div className="relative w-full h-52">

                                    <Image
                                        src={data.image}
                                        alt={data.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-2 right-2">
                                        <Chip size="sm" variant="solid" color="primary">
                                            <CircleFill width={6} />
                                            <Chip.Label>{data.category}</Chip.Label>
                                        </Chip>
                                    </div>
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
                                    
                                       <Link href={`/courses/${data.id}`}><button className="w-full border border-indigo-500 text-indigo-600 py-2 rounded-lg font-medium hover:bg-indigo-50 transition"> View Details </button></Link>
                                    
                                </div>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;