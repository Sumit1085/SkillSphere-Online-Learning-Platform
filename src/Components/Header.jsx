"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <header className="flex h-16 items-center justify-between px-4 md:px-6">

                {/* Logo */}
                <p className="font-bold text-[#1A146B] text-lg md:text-2xl">
                    SkillSphere
                </p>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/courses">Courses</Link></li>
                    <li><Link href="/myprofile">My Profile</Link></li>
                </ul>

                {/* Right Section */}
                <div className="hidden md:flex items-center gap-3">
                    {user ? (
                        <>
                            <h2 className="text-sm">Hello, {user.name}</h2>
                            <Image
                                src={user.image || "/default-avatar.png"}
                                alt="avatar"
                                width={40}
                                height={40}
                                className="w-8 h-8 rounded-full"
                            />
                            <button
                                onClick={async () => await authClient.signOut()}
                                className="px-3 py-1 bg-red-500 text-white rounded"
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Button className="bg-[#1A146B] text-white">
                                <Link href="/login">Login</Link>
                            </Button>
                            <Button>
                                <Link href="/signup">Register</Link>
                            </Button>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">

                    <ul className="flex flex-col gap-3">
                        <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link href="/courses" onClick={() => setMenuOpen(false)}>Courses</Link></li>
                        <li><Link href="/myprofile" onClick={() => setMenuOpen(false)}>My Profile</Link></li>
                    </ul>

                    <div className="border-t pt-4 flex flex-col gap-3">
                        {user ? (
                            <>
                                <Link href={"/myprofile"}>
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={user.image || "/default-avatar.png"}
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span>Hello, {user.name}</span>
                                </div>
                                </Link>

                                <button
                                    onClick={async () => await authClient.signOut()}
                                    className="w-full bg-red-500 text-white py-2 rounded"
                                >
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Button className="bg-[#1A146B] text-white w-full">
                                    <Link href="/login">Login</Link>
                                </Button>
                                <Button className="w-full">
                                    <Link href="/signup">Register</Link>
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;