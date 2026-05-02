"use client";

import { getCourseData } from "@/lib/data";
import { CircleFill } from "@gravity-ui/icons";
import { Chip, Label, SearchField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const data = await getCourseData();
      setCourses(data);
    };
    loadData();
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#EFF4FF]">
      <div className="container mx-auto p-20">

        {/* HEADER */}
        <div className="flex justify-between">
          <div>
            <h2 className="text-[#1A146B] text-5xl font-bold">
              Explore Courses
            </h2>
            <p className="text-[#474651] mt-2">
              Master new skills with our industry-leading professional directory.
            </p>
          </div>

          <SearchField name="search">
            <Label>Search</Label>
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input
                className="w-70"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <SearchField.ClearButton onClick={() => setSearch("")} />
            </SearchField.Group>
          </SearchField>
        </div>

        <div className="grid grid-cols-3 gap-10 mt-10">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((data) => (
              <div key={data.id}>
                <div className="max-w-sm rounded-2xl overflow-hidden h-full shadow-md bg-white">

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

                  <div className="p-4">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <span className="text-orange-500 mr-1">★</span>
                      <span className="font-medium">{data.rating}</span>
                      <span className="ml-1">(1.2k reviews)</span>
                    </div>

                    <h2 className="text-xl font-semibold text-indigo-900 mb-2">
                      {data.title}
                    </h2>

                    <p className="text-sm text-gray-500 mb-4">
                      By {data.instructor}
                    </p>

                    <Link href={`/courses/${data.id}`}>
                      <button className="w-full border border-indigo-500 text-indigo-600 py-2 rounded-lg hover:bg-indigo-50">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              No courses found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;