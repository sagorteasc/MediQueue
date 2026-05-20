"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { Button, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import Link from 'next/link';

const ProfileDropdown = () => {

    const { data } = useSession();
    const user = data?.user;

    const handleLogOut = async () => {
        await signOut();

        // if (pathname === "/profile" || pathname === "/profile/updateprofile" || pathname.startsWith("/bookdetails/")) {
        //     router.push("/login");
        // }
    }

    return (
        <div>
            <Dropdown>
                <Button aria-label="Menu" variant="ghost" className={"w-full p-0 flex justify-center items-center outline-none"}>
                    <Image
                        className="rounded-full w-full"
                        src={user?.image}
                        alt="User Image"
                        width={40}
                        height={40}
                    />
                </Button>
                <Dropdown.Popover>
                    <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                        <Dropdown.Item>
                            <Link href={"/profile"} className="text-accent hover:underline w-full"><Button variant="secondary" className="w-full hover:underline">Profile</Button></Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Button variant="danger-soft" onClick={handleLogOut} className={"w-full p-0 text-danger hover:underline"}>Log Out</Button>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Popover>
            </Dropdown>
        </div>
    );
};

export default ProfileDropdown;