import { Card } from "@heroui/react";
import *as motion from "motion/react-client"

const WhyChooseMediQueue = () => {
    return (
        <div className="max-w-7xl mx-auto mb-16">
            <div className="text-center">
                <p className="text-purple-700 text-xl mb-2"><strong>— Our Advantages —</strong></p>
                <h2 className="font-bold text-4xl text-(--primary-text) mb-7">Why Students Choose MediQueue</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4 mx-auto items-stretch">
                    <motion.div whileHover={{ scale: 1.03, y: -8 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                        <Card className="p-10 hover:border hover:shadow-md hover:border-purple-500 h-full">
                            <div className="bg-[#ede9fe] p-4 rounded-3xl w-fit">
                                <p className="text-4xl">✅</p>
                            </div>

                            <div className="text-start">
                                <h4 className="text-purple-600 font-bold text-2xl mb-2">500+</h4>
                                <p className="text-gray-400 mb-4">Verified Tutors</p>
                                <h3 className="text-(--primary-text) font-bold text-xl mb-2">Verified Tutors</h3>
                                <p className="text-gray-500 text-lg">Every tutor undergoes strict vetting including credential checks, background verification, and demo sessions before going live.</p>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.03, y: -8 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                        <Card className="p-10 hover:border hover:shadow-md hover:border-cyan-500 h-full">
                            <div className="bg-[#ede9fe] p-4 rounded-3xl w-fit">
                                <p className="text-4xl">📅</p>
                            </div>

                            <div className="text-start">
                                <h4 className="text-purple-600 font-bold text-2xl mb-2">10K+</h4>
                                <p className="text-gray-400 mb-4">Sessions/Month</p>
                                <h3 className="text-(--primary-text) font-bold text-xl mb-2">Flexible Scheduling</h3>
                                <p className="text-gray-500 text-lg">Book morning, afternoon, or evening slots. Change or cancel with just a few clicks — your schedule, your rules.</p>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.03, y: -8 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                        <Card className="p-10 hover:border hover:shadow-md hover:border-green-500 h-full">
                            <div className="bg-[#ede9fe] p-4 rounded-3xl w-fit">
                                <p className="text-4xl">⚡</p>
                            </div>

                            <div className="text-start">
                                <h4 className="text-purple-600 font-bold text-2xl mb-2">99.9%</h4>
                                <p className="text-gray-400 mb-4">Uptime</p>
                                <h3 className="text-(--primary-text) font-bold text-xl mb-2">Real-Time Slot Booking</h3>
                                <p className="text-gray-500 text-lg">Live availability updates ensure you never double-book. Instant confirmation with calendar sync and smart reminders.</p>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseMediQueue;