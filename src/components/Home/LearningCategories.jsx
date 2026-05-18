import { Card } from "@heroui/react";
import *as motion from "motion/react-client"

const LearningCategories = () => {
    return (
        <div className="max-w-7xl mx-auto mb-16">
            <div className="text-center">
                <p className="text-purple-700 text-xl mb-2"><strong>— Explore —</strong></p>
                <h2 className="font-bold text-4xl text-gray-800 mb-7">Learning Categories</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4 mx-auto">
                <motion.div whileHover={{ scale: 1.03, y: -8 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Card className="w-full drop-shadow-2xl shadow-md space-y-2 p-10 text-center hover:border hover:border-purple-500">
                        <motion.p whileHover={{ rotate: 8, scale: 1.15 }} transition={{ type: "spring", stiffness: 300 }} className="text-4xl">📐</motion.p>
                        <h4 className="font-bold text-2xl text-gray-800">Mathematics</h4>
                        <p className="font-medium text-purple-400">24 tutors</p>
                    </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03, y: -8 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Card className="w-full drop-shadow-2xl shadow-md space-y-2 p-10 text-center hover:border hover:border-blue-500">
                        <motion.p whileHover={{ rotate: 8, scale: 1.15 }} transition={{ type: "spring", stiffness: 300 }} className="text-4xl">⚛</motion.p>
                        <h4 className="font-bold text-2xl text-gray-800">Physics</h4>
                        <p className="font-medium text-blue-400">18 tutors</p>
                    </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03, y: -8 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Card className="w-full drop-shadow-2xl shadow-md space-y-2 p-10 text-center hover:border hover:border-green-500">
                        <motion.p whileHover={{ rotate: 8, scale: 1.15 }} transition={{ type: "spring", stiffness: 300 }} className="text-4xl">🧪</motion.p>
                        <h4 className="font-bold text-2xl text-gray-800">Chemistry</h4>
                        <p className="font-medium text-green-400">15 tutors</p>
                    </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03, y: -8 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Card className="w-full drop-shadow-2xl shadow-md space-y-2 p-10 text-center hover:border hover:border-red-500">
                        <motion.p whileHover={{ rotate: 8, scale: 1.15 }} transition={{ type: "spring", stiffness: 300 }} className="text-4xl">💻</motion.p>
                        <h4 className="font-bold text-2xl text-gray-800">Programming</h4>
                        <p className="font-medium text-red-400">32 tutors</p>
                    </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03, y: -8 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Card className="w-full drop-shadow-2xl shadow-md space-y-2 p-10 text-center hover:border hover:border-orange-500">
                        <motion.p whileHover={{ rotate: 8, scale: 1.15 }} transition={{ type: "spring", stiffness: 300 }} className="text-4xl">📚</motion.p>
                        <h4 className="font-bold text-2xl text-gray-800">English</h4>
                        <p className="font-medium text-orange-400">21 tutors</p>
                    </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03, y: -8 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Card className="w-full drop-shadow-2xl shadow-md space-y-2 p-10 text-center hover:border hover:border-fuchsia-500">
                        <motion.p whileHover={{ rotate: 8, scale: 1.15 }} transition={{ type: "spring", stiffness: 300 }} className="text-4xl">🧬</motion.p>
                        <h4 className="font-bold text-2xl text-gray-800">Biology</h4>
                        <p className="font-medium text-fuchsia-400">19 tutors</p>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default LearningCategories;