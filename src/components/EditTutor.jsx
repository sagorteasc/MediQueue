"use client";
import { useSession } from "@/lib/auth-client";
import { Card, Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { toast } from "react-toastify";
import { useState } from "react";
import { MdEdit } from "react-icons/md";

const EditTutor = ({ tutor }) => {
    const { _id, teachingMode, subject, availability, experience, hourlyFee, institution, location, name, photo, sessionStartDate, totalSlot } = tutor;
    const { data } = useSession();
    const user = data?.user;

    const [isOpen, setIsOpen] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const tutorData = Object.fromEntries(formData.entries());
        tutorData.userId = user.id;

        const res = await fetch(`http://localhost:8000/allTutorData/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tutorData)
        })
        const data = await res.json();
        console.log(data)
        toast.success("Tutor data updated successfully");
        e.target.reset();
    }

    return (
        <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
            <Button variant="ghost" className={"p-0 text-green-500"}><MdEdit /></Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header className="text-center">
                            <Modal.Heading className="font-bold text-2xl">Edit Tutor Details</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit}>
                                    <div
                                        data-slot="field-group"
                                        className="flex w-full flex-col gap-5"
                                    >
                                        <div
                                            role="group"
                                            data-slot="field"
                                            data-orientation="vertical"
                                            className="flex flex-col gap-2 w-full"
                                        >
                                            <label data-slot="label" htmlFor="name">
                                                Tutor Name
                                            </label>

                                            <input
                                                data-slot="input"
                                                id="name"
                                                name="name"
                                                placeholder="Karim Hossain"
                                                defaultValue={name}
                                                className="h-8 w-full rounded-lg border px-2.5 py-1"
                                            />
                                        </div>

                                        <div
                                            role="group"
                                            data-slot="field"
                                            data-orientation="vertical"
                                            className="flex flex-col gap-2 w-full"
                                        >
                                            <label data-slot="label" htmlFor="photo">
                                                Photo URL
                                            </label>

                                            <input
                                                data-slot="input"
                                                id="photo"
                                                name="photo"
                                                placeholder="image link"
                                                defaultValue={photo}
                                                className="h-8 w-full rounded-lg border px-2.5 py-1"
                                            />
                                        </div>

                                        <div
                                            role="group"
                                            data-slot="field"
                                            data-orientation="vertical"
                                            className="flex flex-col gap-2 w-full"
                                        >
                                            <label data-slot="label" htmlFor="subject">
                                                Subject
                                            </label>

                                            <select
                                                id="subject"
                                                name="subject"
                                                defaultValue={subject}
                                                className="w-full rounded-md border p-2"
                                            >
                                                <option value="">Select Subject</option>
                                                <option>Mathematics</option>
                                                <option>Physics</option>
                                                <option>Chemistry</option>
                                                <option>Biology</option>
                                                <option>English</option>
                                                <option>Programming</option>
                                            </select>
                                        </div>

                                        <div
                                            role="group"
                                            data-slot="field"
                                            data-orientation="vertical"
                                            className="flex flex-col gap-2 w-full"
                                        >
                                            <label data-slot="label" htmlFor="availability">
                                                Available Days and Time
                                            </label>

                                            <input
                                                data-slot="input"
                                                id="availability"
                                                name="availability"
                                                placeholder="Mon - Sat 4:00 PM - 8:00 PM"
                                                defaultValue={availability}
                                                className="h-8 w-full rounded-lg border px-2.5 py-1"
                                            />
                                        </div>

                                        <div
                                            role="group"
                                            data-slot="field"
                                            data-orientation="vertical"
                                            className="flex flex-col gap-2 w-full"
                                        >
                                            <label data-slot="label" htmlFor="hourlyFee">
                                                Hourly Fee
                                            </label>

                                            <input
                                                data-slot="input"
                                                id="hourlyFee"
                                                name="hourlyFee"
                                                type="number"
                                                placeholder="800"
                                                defaultValue={hourlyFee}
                                                className="h-8 w-full rounded-lg border px-2.5 py-1"
                                            />
                                        </div>

                                        <div
                                            role="group"
                                            data-slot="field"
                                            data-orientation="vertical"
                                            className="flex flex-col gap-2 w-full"
                                        >
                                            <label data-slot="label" htmlFor="totalSlot">
                                                Total Slot
                                            </label>

                                            <input
                                                data-slot="input"
                                                id="totalSlot"
                                                name="totalSlot"
                                                type="number"
                                                placeholder="15"
                                                defaultValue={totalSlot}
                                                className="h-8 w-full rounded-lg border px-2.5 py-1"
                                            />
                                        </div>

                                        <div
                                            role="group"
                                            data-slot="field"
                                            data-orientation="vertical"
                                            className="flex flex-col gap-2 w-full"
                                        >
                                            <label data-slot="label" htmlFor="sessionStartDate">
                                                Session Start Date
                                            </label>

                                            <input
                                                data-slot="input"
                                                id="sessionStartDate"
                                                name="sessionStartDate"
                                                type="date"
                                                defaultValue={sessionStartDate}
                                                className="h-8 w-full rounded-lg border px-2.5 py-1"
                                            />
                                        </div>

                                        <div
                                            role="group"
                                            data-slot="field"
                                            data-orientation="vertical"
                                            className="flex flex-col gap-2 w-full"
                                        >
                                            <label data-slot="label" htmlFor="institution">
                                                Institution
                                            </label>

                                            <input
                                                data-slot="input"
                                                id="institution"
                                                name="institution"
                                                placeholder="Dhaka University"
                                                defaultValue={institution}
                                                className="h-8 w-full rounded-lg border px-2.5 py-1"
                                            />
                                        </div>

                                        <div
                                            role="group"
                                            data-slot="field"
                                            data-orientation="vertical"
                                            className="flex flex-col gap-2 w-full"
                                        >
                                            <label data-slot="label" htmlFor="experience">
                                                Experience
                                            </label>

                                            <textarea
                                                data-slot="textarea"
                                                id="experience"
                                                name="experience"
                                                placeholder="10 years teaching experience"
                                                defaultValue={experience}
                                                className="min-h-16 w-full rounded-lg border px-2.5 py-2"
                                            />
                                        </div>

                                        <div
                                            role="group"
                                            data-slot="field"
                                            data-orientation="vertical"
                                            className="flex flex-col gap-2 w-full"
                                        >
                                            <label data-slot="label" htmlFor="location">
                                                Location (Area/City)
                                            </label>

                                            <input
                                                data-slot="input"
                                                id="location"
                                                name="location"
                                                placeholder="Dhaka"
                                                defaultValue={location}
                                                className="h-8 w-full rounded-lg border px-2.5 py-1"
                                            />
                                        </div>

                                        <div
                                            role="group"
                                            data-slot="field"
                                            data-orientation="vertical"
                                            className="flex flex-col gap-2 w-full"
                                        >
                                            <label data-slot="label" htmlFor="teachingMode">
                                                Teaching Mode
                                            </label>

                                            <select
                                                id="teachingMode"
                                                name="teachingMode"
                                                defaultValue={teachingMode}
                                                className="w-full rounded-md border p-2"
                                            >
                                                <option value="">Select Mode</option>
                                                <option>Online</option>
                                                <option>Offline</option>
                                                <option>Both</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button
                                        data-slot="button"
                                        data-variant="outline"
                                        data-size="default"
                                        className="inline-flex items-center justify-center w-full h-8 mt-5 gap-1.5 rounded-lg border bg-background px-2.5 text-sm font-medium transition-all hover:bg-accent hover:text-white"
                                    >
                                        Edit
                                    </button>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditTutor;