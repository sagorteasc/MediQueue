"use client";
import { Card, Button } from "@heroui/react";
import Image from "next/image";
import { motion } from "motion/react";
import BookSessionModal from "./BookSessionModal";
import { useState } from "react";

const TutorDetailsCard = ({ tutorDetails }) => {

    const { photo, name, subject, teachingMode, experience, institution, availability, hourlyFee, totalSlot, sessionStartDate } = tutorDetails;

    const [slot, setSlot] = useState(totalSlot);

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Card className="w-11/12 mx-auto md:grid md:grid-cols-3 gap-6 shadow-lg p-6 md:p-8 hover:border hover:border-purple-500">

                <div className="col-span-1 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-200 pb-5 md:pb-0 md:pr-5">
                    <Image
                        className="rounded-xl h-50 mx-auto"
                        src={photo}
                        alt="Tutor Subject"
                        width={300}
                        height={200}
                    />

                    <div className="mt-5 space-y-4">
                        <h4 className="font-bold text-xl text-gray-800">{name}</h4>
                        <p className='text-purple-500 backdrop-blur-md px-4 py-1 text-xs bg-[#ede9fe] border border-purple-500 rounded-full w-fit mx-auto'>📘 {subject}</p>

                        <p className='text-green-500 backdrop-blur-md px-4 py-1 text-xs bg-[#dcfce7] border border-green-500 rounded-full w-fit mx-auto'>⏰ {availability}</p>
                    </div>
                </div>

                <div className="flex flex-col col-span-2 justify-between">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                            <p className='text-sm text-gray-500 mb-1'>Subject</p>
                            <h3 className="font-medium text-gray-800">{subject}</h3>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                            <p className='text-sm text-gray-500 mb-1'>Teaching Mode</p>
                            <h3 className="font-medium text-gray-800">{teachingMode}</h3>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                            <p className='text-sm text-gray-500 mb-1'>Experience</p>
                            <h3 className="font-medium text-gray-800">{experience}</h3>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                            <p className='text-sm text-gray-500 mb-1'>Institution</p>
                            <h3 className="font-medium text-gray-800">{institution}</h3>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                            <p className='text-sm text-gray-500 mb-1'>Hourly Fee</p>
                            <h3 className="font-medium text-gray-800">{hourlyFee} TK.</h3>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                            <p className='text-sm text-gray-500 mb-1'>Total Slot</p>
                            <h3 className="font-medium text-gray-800">{slot}</h3>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                            <p className='text-sm text-gray-500 mb-1'>Session Start</p>
                            <h3 className="font-medium text-gray-800">{sessionStartDate}</h3>
                        </div>

                    </div>

                    <BookSessionModal tutorDetails={tutorDetails} slot={slot} setSlot={setSlot} />
                </div>

            </Card>
        </motion.div>
    );
};

export default TutorDetailsCard;