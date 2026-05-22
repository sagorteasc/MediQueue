"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";

const DeleteTutor = ({ tutorId }) => {
    const router = useRouter();

    const handleCancel = async () => {
        const { data: tokenData } = await authClient.token();

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_SIDE_URL}/allTutorData/${tutorId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            }
        });
        const data = await res.json();
        toast.success("Tutor deleted successfully");
        router.refresh();
    }

    return (
        <div>
            <AlertDialog>
                <Button variant="ghost" className={"rounded p-0"}><BiTrash className="text-red-500" /></Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Cancel booking permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleCancel} slot="close" variant="danger">
                                    Delete Booking
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};
export default DeleteTutor;