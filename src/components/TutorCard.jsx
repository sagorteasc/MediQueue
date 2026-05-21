"use client";
import { Button, Card } from "@heroui/react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const TutorCard = ({ popularTutors }) => {
    const { _id, photo, name, subject, teachingMode, experience, institution } = popularTutors;

    return (
        <div>
            <motion.div whileHover={{ scale: 1.03, y: -8 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                <Card className="w-full h-full hover:shadow-md p-5 hover:border hover:border-purple-500">
                    <Image
                        className="rounded-xl h-50 w-full"
                        src={photo}
                        alt="Tutor Subject"
                        width={300}
                        height={200}
                    />

                    <div className="flex flex-col">
                        <h4 className="font-bold text-xl text-gray-800 mb-1">{name}</h4>
                        <p className='text-purple-500 backdrop-blur-md px-4 py-1 text-xs bg-[#ede9fe] border border-purple-500 rounded-full w-fit mb-4'>{subject}</p>

                        <div className="flex flex-col gap-2 h-28 grow">
                            <p className="text-gray-500 line-clamp-1 font-medium">🎓 {institution}</p>
                            <p className="text-gray-500 line-clamp-1 font-medium">📝 {experience}</p>
                            <p className="text-gray-500 line-clamp-1 font-medium">🌍 {teachingMode}</p>
                        </div>

                        <motion.div whileHover={{ scale: 1.03, x: -5, y: 2 }} transition={{ type: "spring", stiffness: 200, duration: 0.2 }} className="flex justify-end">
                            <Link href={`/tutors/${_id}`}><Button className={"bg-linear-to-br from-orange-400 via-pink-400 to-red-300 hover:border-purple-400 hover:border"}>Book Session</Button></Link>
                        </motion.div>
                    </div>
                </Card>
            </motion.div>
        </div>
    );
};

export default TutorCard;