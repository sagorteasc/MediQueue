"use client";

import { motion } from "motion/react";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const NotFound = () => {

    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center px-6 bg-linear-to-br from-orange-50 via-pink-50 to-purple-50">

            <div className="max-w-2xl text-center">

                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-8xl md:text-9xl font-black bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
                >
                    404
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-gray-800 mt-4"
                >
                    Oops! Page Not Found
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-gray-500 mt-5 text-lg leading-relaxed"
                >
                    The page you are looking for does not exist or may have been moved.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-10"
                >
                    <Button onClick={() => router.back(-1)} className="bg-linear-to-br from-orange-400 via-pink-400 to-red-300 px-8 py-6 text-white font-medium rounded-xl hover:scale-105 transition-transform">
                        Back To Home
                    </Button>
                </motion.div>

            </div>
        </div>
    );
};

export default NotFound;