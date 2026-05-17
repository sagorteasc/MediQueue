"use client";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { motion } from 'motion/react';

const Banner = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', () => {
            const current = emblaApi.selectedScrollSnap();
            setCurrentSlide(current)
        })
        emblaApi.plugins().autoplay?.play()
    }, [emblaApi])

    return (
        <div className="embla my-32">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y touch-pinch-zoom">
                    <div className="min-w-full flex-[0_0_100%]">
                        <div className="bg-linear-to-tl from-[#1b0d50] via-[#391155] to-[#2f0b39] px-4 sm:px-8 lg:px-10 py-16 lg:py-20">

                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0, }}
                                transition={{ duration: 0.8, ease: "easeIn" }}
                                className='space-y-4 flex flex-col justify-center items-center text-center'
                            >
                                <small className="font-semibold text-gray-500 text-2xl">01 / 03</small>
                                <h2 className='text-white font-bold text-6xl'>Book Expert Tutors Instantly</h2>
                                <p className='text-white opacity-70'>Connect with verified professionals and accelerate your learning journey.</p>
                                <Link href={"/tutors"}>
                                    <Button variant='ghost' className={"rounded text-white bg-linear-to-bl from-[#8126c0] to-[#c91f66]"}>Call to Action</Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    <div className="min-w-full flex-[0_0_100%]">
                        <div className="bg-linear-to-tl from-[#193160] via-[#26315e] to-[#252442] px-4 sm:px-8 lg:px-10 py-16 lg:py-20">

                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeIn" }}
                                className='space-y-4 flex flex-col justify-center items-center text-center'
                            >
                                <small className="font-semibold text-gray-500 text-2xl">02 / 03</small>
                                <h2 className='text-white font-bold text-6xl'>Learn Without Scheduling Hassles</h2>
                                <p className='text-white opacity-70'>Smart calendar integration and real-time availability — sessions that fit your life.</p>
                                <Link href={"/tutors"}>
                                    <Button variant='ghost' className={"rounded text-white bg-linear-to-bl from-[#8126c0] to-[#c91f66]"}>Call to Action</Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    <div className="min-w-full flex-[0_0_100%]">
                        <div className="bg-linear-to-tl from-[#193825] via-[#283727] to-[#2f261d] px-4 sm:px-8 lg:px-10 py-16 lg:py-20">

                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeIn" }}
                                className='space-y-4 flex flex-col justify-center items-center text-center'
                            >
                                <small className="font-semibold text-gray-500 text-2xl">03 / 03</small>
                                <h2 className='text-white font-bold text-6xl'>Secure & Smart Online Session Booking</h2>
                                <p className='text-white opacity-70'>End-to-end encrypted bookings with instant confirmations and reminders.</p>
                                <Link href={"/tutors"}>
                                    <Button variant='ghost' className={"rounded text-white bg-linear-to-bl from-[#8126c0] to-[#c91f66]"}>Call to Action</Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;