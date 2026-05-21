"use client";
import { Button } from "@heroui/react";
import { GiConfirmed } from "react-icons/gi";

const ConfirmBooking = ({ bookingId }) => {

    const handleConfirm = async () => {
        const res = await fetch(`${process.env.SERVER_SIDE_URL}/booking/confirm/${bookingId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        window.location.reload();
    }

    return (
        <div>
            <Button onClick={handleConfirm} variant="ghost" className={"rounded p-0"}><GiConfirmed className="text-green-500" /></Button>
        </div>
    );
};
export default ConfirmBooking;