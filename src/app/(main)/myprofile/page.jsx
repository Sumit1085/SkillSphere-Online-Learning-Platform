import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MyProfile = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    console.log(session.user)
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 relative">

                  

                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                            <Image
                                src={session.user?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs_aMoCDAkVZluRbcd0H1DA9exUnhbXNlzgA&s"} // put your image in public folder
                                alt="profile"
                                width={60}
                                height={60}
                                className="rounded-full object-cover"
                            />
                            <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow">
                                ✏️
                            </div>
                        </div>

                        <div>
                            <h2 className="font-semibold text-lg">{session.user.name}</h2>
                            <p className="text-sm text-gray-500">{session.user.email}</p>
                        </div>
                    </div>

                   
                    <hr className="mb-4" />

                    <div className="space-y-4 text-sm">

                        <div className="flex justify-between items-center border-b pb-2">
                            <span className="text-gray-600">Name</span>
                            <span className="text-gray-900">{session.user.name}</span>
                        </div>

                        <div className="flex justify-between items-center border-b pb-2">
                            <span className="text-gray-600">Email account</span>
                            <span className="text-gray-900">{session.user.email}</span>
                        </div>

                        <div className="flex justify-between items-center border-b pb-2">
                            <span className="text-gray-600">Mobile number</span>
                            <span className="text-blue-500 cursor-pointer">Add number</span>
                        </div>

                        <div className="flex justify-between items-center border-b pb-2">
                            <span className="text-gray-600">Location</span>
                            <span className="text-gray-900">Bangladesh</span>
                        </div>
                    </div>

                    {/* Button */}
                    <div>
                       
                        <button className="mt-6 w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                       <Link href={'/updateinfo'}> Update Information</Link>
                    </button>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;