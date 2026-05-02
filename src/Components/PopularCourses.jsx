import { Button } from "@heroui/react";
import CourseCard from "./CourseCard";
import { getCourseData } from "@/lib/data";
import Link from "next/link";

const PopularCourses = async () => {


    const datas = await getCourseData();

    console.log(datas)
    const limitedData = datas.slice(0, 3)

    return (

        <div className="bg-[#EFF4FF] p-5 md:p-20 space-y-5">
            <h1 className="text-3xl font-bold text-[#1A146B]">Popular Courses</h1>
            <div className="grid grid-col-1 md:grid-cols-3 gap-5 container mx-auto">
                {
                    limitedData.map(data => <CourseCard key={data.id} data={data}></CourseCard>)
                }
            </div>
            <Button className='block mx-auto bg-[#1A146B]'><Link href={'/courses'}>Browse More Courses</Link></Button>
        </div>
    );
};

export default PopularCourses;