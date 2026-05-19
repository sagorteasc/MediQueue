"use client";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { motion } from 'motion/react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const Banner = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', () => {
            const current = emblaApi.selectedScrollSnap();
            setCurrentSlide(current)
        })
        emblaApi.plugins().autoplay?.play()
    }, [emblaApi])

    return (
        <div className="embla my-16 relative">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y touch-pinch-zoom">
                    <div className="min-w-full flex-[0_0_100%]">
                        <div className="bg-linear-to-br from-[#0f172a] via-[#4c1d95] to-[#db2777] h-100 flex flex-col items-center justify-center px-10">

                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0, }}
                                transition={{ duration: 0.8, ease: "easeIn" }}
                                className='space-y-4 flex flex-col text-center'
                            >
                                <p className='text-[#d8b4fe] backdrop-blur-md p-2 text-xs bg-[#581c87]/40 border border-purple-500 rounded-full w-fit mx-auto'>MediQueue Platform</p>
                                <h2 className='text-white font-bold text-3xl sm:text-4xl lg:text-6xl'>Book Expert Tutors Instantly</h2>
                                <p className='text-white/80'>Connect with verified professionals and accelerate your learning journey.</p>
                                <Link href={"/tutors"}>
                                    <Button variant='ghost' className={"rounded text-white bg-linear-to-br from-orange-400 via-pink-400 to-red-300 hover:scale-105 transition-all duration-200 hover:border-purple-400 hover:border"}>Call to Action</Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    <div className="min-w-full flex-[0_0_100%]">
                        <div className="bg-linear-to-r from-[#0f172a] via-[#1d4ed8] to-[#06b6d4] h-100 flex flex-col items-center justify-center px-10">

                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeIn" }}
                                className='space-y-4 flex flex-col text-center'
                            >
                                <p className='text-[#a5f3fc] backdrop-blur-md p-2 text-xs bg-[#0f3b57]/40 border border-cyan-500 rounded-full w-fit mx-auto'>MediQueue Platform</p>
                                <h2 className='text-white font-bold text-3xl sm:text-4xl lg:text-6xl'>Learn Without Scheduling Hassles</h2>
                                <p className='text-white/80'>Smart calendar integration and real-time availability — sessions that fit your life.</p>
                                <Link href={"/tutors"}>
                                    <Button variant='ghost' className={"rounded text-white bg-linear-to-br from-orange-400 via-pink-400 to-red-300 hover:scale-105 transition-all duration-200 hover:border-purple-400 hover:border"}>Call to Action</Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    <div className="min-w-full flex-[0_0_100%]">
                        <div className="bg-linear-to-br from-[#052e16] via-[#065f46] to-[#84cc16] h-100 flex flex-col items-center justify-center px-10">

                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeIn" }}
                                className='space-y-4 flex flex-col text-center'
                            >
                                <p className='text-[#d9f99d] backdrop-blur-md p-2 text-xs bg-[#365314]/40 border border-lime-500 rounded-full w-fit mx-auto'>MediQueue Platform</p>
                                <h2 className='text-white font-bold text-3xl sm:text-4xl lg:text-6xl'>Secure & Smart Online Session Booking</h2>
                                <p className='text-white/80'>End-to-end encrypted bookings with instant confirmations and reminders.</p>
                                <Link href={"/tutors"}>
                                    <Button variant='ghost' className={"rounded text-white bg-linear-to-br from-orange-400 via-pink-400 to-red-300 hover:scale-105 transition-all duration-200 hover:border-purple-400 hover:border"}>Call to Action</Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <button className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-black/40 transition-all duration-300" onClick={scrollPrev}><BiLeftArrow /></button>

            <button className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-black/40 transition-all duration-300" onClick={scrollNext}><BiRightArrow /></button>
        </div>
    );
};

export default Banner;