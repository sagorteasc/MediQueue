"use client";
import { useSession } from "@/lib/auth-client";
import { Card } from "@heroui/react";
import { toast } from "react-toastify";

const AddTutor = () => {

    const { data } = useSession();
    const user = data?.user;
    console.log(user);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const tutorData = Object.fromEntries(formData.entries());
        tutorData.userId = user.id;

        const res = await fetch(`${process.env.SERVER_SIDE_URL}/addTutor`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tutorData)
        })
        const data = await res.json();
        toast.success("Tutor added successfully");
        e.target.reset();
    }

    return (
        <div className="max-w-7xl mx-auto mt-32 mb-16">
            <div className="w-3/4 mx-auto mb-6">
                <h2 className="font-bold text-gray-800 text-4xl mb-2">Add a New Tutor</h2>
                <p className="text-black/70">Fill in the details to list a new tutor on MediQueue</p>
            </div>

            <Card className="w-3/4 mx-auto">
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                        Submit Tutor
                    </button>
                </form>
            </Card>
        </div>
    );
};

export default AddTutor;