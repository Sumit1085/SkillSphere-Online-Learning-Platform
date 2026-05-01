import { getCourseData } from "@/lib/data";
import Image from "next/image";

const CourseDetailsPage = async ({ params }) => {

    const { id } = await params

    console.log(id)

    const datas = await getCourseData();

    const course = datas.find(item => item.id == id);

    return (
        <div className="bg-gray-100 min-h-screen">

      {/* 🔵 HERO SECTION */}
      <div className="bg-[#1A146B] text-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <span className="bg-white/20 text-sm px-3 py-1 rounded-full">
              Bestseller
            </span>

            <h1 className="text-4xl font-bold mt-4">
             {course.title}
            </h1>

            <p className="mt-4 text-gray-300">
              {course.description}
            </p>

            <div className="flex items-center gap-4 mt-4 text-sm text-gray-300">
              <span>⭐ {course.rating} (2,056 reviews)</span>
              <span>⏱ {course.duration}</span>
              <span>🌐 English</span>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-sm mx-auto text-black">

            <div className="relative w-full h-48">
              <Image
                src={course.image}
                alt="course"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-bold mt-4">{course.price}</h2>

            <button className="w-full bg-orange-500 text-white py-2 rounded-lg mt-4 hover:bg-orange-600 transition">
              Enroll Now
            </button>

            <button className="w-full border border-gray-300 py-2 rounded-lg mt-2 hover:bg-gray-100 transition">
              View Syllabus
            </button>

            <p className="text-xs text-center mt-2 text-gray-500">
              30-Day Money Back Guarantee
            </p>
          </div>

        </div>
      </div>

      {/* ⚪ CONTENT SECTION */}
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        {/* Instructor */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">

          <div className="flex gap-4 items-center">
            <Image
              src="https://i.pravatar.cc/100"
              alt="instructor"
              width={60}
              height={60}
              className="rounded-full"
            />

            <div>
              <h3 className="font-bold">{course.instructor}</h3>
              <p className="text-sm text-gray-500">
                {course.instructor_job}
              </p>
            </div>
          </div>

          <p className="mt-4 text-gray-600">
            {course.instructor} is a seasoned software engineer with over 10 years of
            experience in building scalable web applications. He focuses on
            mentoring and real-world development practices.
          </p>

          <div className="flex gap-6 mt-4 text-sm text-gray-500">
            <span>⭐ 10,000+ Reviews</span>
            <span>👨‍🎓 50,000+ Students</span>
          </div>
        </div>

        {/* What you'll learn */}
        <div className="bg-[#1A146B] text-white p-6 rounded-xl shadow">
          <h3 className="font-bold mb-4">What youll learn</h3>

          <ul className="space-y-3 text-sm">
            <li>✔ Build real-world full-stack applications</li>
            <li>✔ Master React, Node.js & APIs</li>
            <li>✔ Learn modern UI/UX practices</li>
            <li>✔ Deploy applications using cloud tools</li>
          </ul>
        </div>

      </div>

    </div>
    );
};

export default CourseDetailsPage;