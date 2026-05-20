"use client";
import { useSession } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "react-toastify";

const BookSessionModal = ({ tutorDetails, slot, setSlot }) => {

    const { _id, name } = tutorDetails;
    const { data } = useSession();
    const user = data?.user;

    const [isOpen, setIsOpen] = useState(false);

    const handleBookSession = async (e) => {
        e.preventDefault();

        if (slot > 0) {

            const res = await fetch(`http://localhost:8000/allTutorData/${_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json();
            console.log(data);

            if (data.modifiedCount) {
                setSlot(prev => prev - 1);
                toast.success("Booking Successfull");
                setIsOpen(false);
            }
        }
        else {
            toast.error("No available slots left");
            return;
        }
    }

    return (
        <div>
            <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
                <motion.div whileHover={{ scale: 1.03, x: -10, y: 2 }} transition={{ type: "spring", stiffness: 200, duration: 0.2 }} className="flex justify-end mt-6">
                    <Button className={"bg-linear-to-br from-orange-400 via-pink-400 to-red-300 px-5 hover:border-purple-400 hover:border"}>Book Session</Button>
                </motion.div>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header className="text-center">
                                <Modal.Heading className="font-bold text-2xl">Book Session</Modal.Heading>
                                <p className="text-sm text-muted">
                                    with {name}
                                </p>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={handleBookSession} className="flex flex-col gap-4">
                                        <TextField className="w-full" name="name" type="text" variant="secondary">
                                            <Label>Student Name</Label>
                                            <Input required value={user?.name} placeholder="Enter your name" />
                                        </TextField>
                                        <TextField className="w-full" name="phone" type="tel" variant="secondary">
                                            <Label>Phone Number</Label>
                                            <Input required placeholder="Enter your phone number" />
                                        </TextField>
                                        <TextField className="w-full" name="tutorId" variant="secondary">
                                            <Label>Tutor Id</Label>
                                            <Input required value={_id} placeholder="Tutor Id" />
                                        </TextField>
                                        <TextField className="w-full" name="tutorName" type="text" variant="secondary">
                                            <Label>Tutor Name</Label>
                                            <Input required value={name} placeholder="Enter Tutor name" />
                                        </TextField>
                                        <TextField className="w-full" name="email" type="email" variant="secondary">
                                            <Label>Student Email</Label>
                                            <Input required value={user?.email} placeholder="Enter your email" />
                                        </TextField>
                                        <Modal.Footer>
                                            <motion.div whileHover={{ scale: 1.03, y: 2 }} transition={{ type: "spring", stiffness: 200, duration: 0.2 }}>
                                                <Button slot="close" variant="secondary">
                                                    Cancel
                                                </Button>
                                            </motion.div>
                                            <motion.div whileHover={{ scale: 1.03, y: 2 }} transition={{ type: "spring", stiffness: 200, duration: 0.2 }}>
                                                <Button
                                                    onClick={() => setIsOpen(true)}
                                                    type="submit"
                                                    className={"bg-linear-to-br from-orange-400 via-pink-400 to-red-300 px-5 hover:border-purple-400 hover:border"}
                                                >
                                                    Confirm Booking
                                                </Button>
                                            </motion.div>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default BookSessionModal;