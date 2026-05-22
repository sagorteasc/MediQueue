"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { GiConfirmed } from "react-icons/gi";
import { toast } from "react-toastify";

const ConfirmBooking = ({ bookingId }) => {
    const router = useRouter();
    const handleConfirm = async () => {
        const { data: tokenData } = await authClient.token();

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_SIDE_URL}/booking/confirm/${bookingId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            }
        });
        const data = await res.json();
        toast.success("Confirmed Succefull");
        router.refresh();
    }

    return (
        <div>
            <Button onClick={handleConfirm} variant="ghost" className={"rounded p-0"}><GiConfirmed className="text-green-500" /></Button>
        </div>
    );
};
export default ConfirmBooking;