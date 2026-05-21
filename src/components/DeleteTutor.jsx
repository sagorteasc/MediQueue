"use client";
import { AlertDialog, Button } from "@heroui/react";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";

const DeleteTutor = ({ tutorId }) => {

    const handleCancel = async () => {
        const res = await fetch(`http://localhost:8000/allTutorData/${tutorId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        toast.success("Tutor deleted successfully");
        window.location.reload();
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