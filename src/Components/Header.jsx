'use client'

import { authClient } from "@/lib/auth-client"
import { Button, Spinner } from '@heroui/react';
import Image from "next/image";
import Link from 'next/link';
const Header = () => {



    const { data: session, isPending } = authClient.useSession()
    const user = session?.user
    return (
        <div>

            <nav className="sticky top-0 z-50 bg-white shadow-sm">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">

                        <p className="font-bold text-[#1A146B] text-2xl">SkillSphere </p>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/courses">Courses</Link></li>
                        <li><Link href="/myprofile">My Profile</Link></li>

                    </ul>

                    <div className='flex gap-3'>

                        {
                            user ?
                                (
                                    <div className="flex items-center gap-3">
                                        <h2>Hello, {user.name}</h2>
                                        <Image
                                            src={session.user.image || "/default-avatar.png"}
                                            alt="avatar" width={50} height={50}
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <button
                                            onClick={async () => {
                                                await authClient.signOut();
                                            }}
                                            className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <Button>
                                            <Link href="/login">Login</Link>
                                        </Button>
                                        <Button>
                                            <Link href="/signup">Register</Link>
                                        </Button>
                                    </>
                                )
                        }

                    </div>
                </header>
            </nav>


        </div>

    );
};

export default Header;