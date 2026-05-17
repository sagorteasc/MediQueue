"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { Button, Dropdown, Label } from "@heroui/react";
import Image from "next/image";

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
                        <Dropdown.Item id="new-file" textValue="New file">
                            <Label className="text-lg font-medium text-gray-500">User: {user?.name}</Label>
                        </Dropdown.Item>
                        <Dropdown.Item id="copy-link" textValue="Copy link">
                            <Button onClick={handleLogOut} className={"w-full"}>Log Out</Button>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Popover>
            </Dropdown>
        </div>
    );
};

export default ProfileDropdown;