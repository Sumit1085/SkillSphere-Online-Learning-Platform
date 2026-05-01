'use client'


import { Button } from '@heroui/react';
import Link from 'next/link';
const Header = () => {
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
                        <li><Link href="#">My Profile</Link></li>
                        
                    </ul>

                    <div className='flex gap-3'>
                        
                            <Button>Login</Button>
                            <Button>Register</Button>
                        
                    </div>
                </header>
            </nav>


        </div>

    );
};

export default Header;