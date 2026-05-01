import { Button } from "@heroui/react";
import CourseCard from "./CourseCard";

const PopularCourses = async () => {
    const res = await fetch('http://localhost:3000/data.json');
    const datas = await res.json()

    const limitedData = datas.slice(0, 3)

    return (

        <div className="bg-[#EFF4FF] p-20 space-y-5">
            <h1 className="text-3xl font-bold text-[#1A146B]">Popular Courses</h1>
            <div className="grid grid-cols-3 gap-5 container mx-auto">
                {
                    limitedData.map(data => <CourseCard key={data.id} data={data}></CourseCard>)
                }
            </div>
            <Button className='block mx-auto bg-[#1A146B]'>Browse More Courses</Button>
        </div>
    );
};

export default PopularCourses;