"use client";
import { useSession } from "@/lib/auth-client";
import { Card } from "@heroui/react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const AddTutor = () => {

    useEffect(() => {
        document.title = "MediQueue - Add Tutor"
    }, [])
    const { data } = useSession();
    const user = data?.user;

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            return;
        }

        const formData = new FormData(e.currentTarget);
        const tutorData = Object.fromEntries(formData.entries());
        tutorData.userId = user.id;

        const { data: tokenData } = await authClient.token();

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_SIDE_URL}/addTutor`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
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
                <h2 className="font-bold text-(--primary-text) text-4xl mb-2">Add a New Tutor</h2>
                <p className="text-gray-500">Fill in the details to list a new tutor on MediQueue</p>
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
                                <option value="" className="bg-background">Select Subject</option>
                                <option className="bg-background">Mathematics</option>
                                <option className="bg-background">Physics</option>
                                <option className="bg-background">Chemistry</option>
                                <option className="bg-background">Biology</option>
                                <option className="bg-background">English</option>
                                <option className="bg-background">Programming</option>
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
                                <option className="bg-background" value="">Select Mode</option>
                                <option className="bg-background">Online</option>
                                <option className="bg-background">Offline</option>
                                <option className="bg-background">Both</option>
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