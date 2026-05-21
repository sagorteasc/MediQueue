"use client"

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLogo from "@/assets/Logo.png"
import NavLink from "./NavLink";
import { useSession } from "@/lib/auth-client";
import ProfileDropdown from "@/components/ProfileDropdown";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navList = <>
        <li>
            <NavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        </li>
        <li>
            <NavLink href="/tutors" onClick={() => setIsMenuOpen(false)}>Tutors</NavLink>
        </li>
        <li>
            <NavLink href="/add-tutor" onClick={() => setIsMenuOpen(false)}>Add Tutors</NavLink>
        </li>
        <li>
            <NavLink href="/profile" onClick={() => setIsMenuOpen(false)}>My Tutors</NavLink>
        </li>
        <li>
            <NavLink href="/my-booked-session" onClick={() => setIsMenuOpen(false)}>My Booked Sessions</NavLink>
        </li>
    </>

    const { data } = useSession();
    const user = data?.user;

    return (
        <nav className="containter mx-auto fixed top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <button
                        className="lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <Link href={"/"}>
                        <div className="items-center gap-3 hidden lg:flex">
                            <Image
                                src={NavLogo}
                                alt="Navbar Logo"
                                width={200}
                                height={200}
                            />
                        </div>
                    </Link>
                </div>
                <ul className="hidden items-center gap-4 lg:flex">
                    {navList}
                </ul>
                <div>
                    <div className="hidden items-center gap-4 lg:flex">
                        {
                            user ?
                                <div className="flex items-center">
                                    <ProfileDropdown />
                                </div>
                                :
                                <div className="flex items-center gap-2">
                                    <Link href={"/login"}><Button className={"w-full"}>Login</Button></Link>
                                    <Link href={"/register"}><Button className={"w-full"}>Sign Up</Button></Link>
                                </div>
                        }
                    </div>

                    <Link href={"/"}>
                        <div className="items-center gap-3 flex lg:hidden">
                            <Image
                                src={NavLogo}
                                alt="Navbar Logo"
                                width={200}
                                height={200}
                            />
                        </div>
                    </Link>
                </div>
            </header>
            {isMenuOpen && (
                <div className="border-t border-separator lg:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                        {navList}
                        <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                            {
                                user ?
                                    <div className="flex items-center gap-3 w-full">
                                        <ProfileDropdown />
                                    </div>
                                    :
                                    <div>
                                        <Link href={"/login"}><Button className={"w-full mb-2"}>Login</Button></Link>
                                        <Link href={"/register"}><Button className={"w-full"}>Sign Up</Button></Link>
                                    </div>
                            }
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;