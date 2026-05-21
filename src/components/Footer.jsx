import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#1e293b]">
            <div className="max-w-400 mx-auto px-6 py-8">
                <div className="grid gap-4 md:grid-cols-4 pb-5 items-stretch">
                    <div className="space-y-5 my-6 md:mb-0 md:w-11/12 col-span-2">
                        <h2 className="font-bold text-2xl">📚 <span className="bg-linear-to-br from-[#1d3878] to-[#4d7aa6] bg-clip-text text-transparent">Medi</span><span className="bg-linear-to-br from-[#31c6e3] to-[#0aa3de] bg-clip-text text-transparent">Queue</span></h2>
                        <p className="font-medium text-white/80">Your premier platform for connecting with expert tutors. Learn smarter, achieve more.</p>
                        <div className="flex gap-4">
                            <div className="text-white rounded-full bg-gray-400 w-fit p-2 hover:bg-accent transition-colors duration-200">
                                <FaFacebookF />
                            </div>

                            <div className="text-white rounded-full bg-gray-400 w-fit p-2 hover:bg-black transition-colors duration-200">
                                <FaXTwitter />
                            </div>

                            <div className="text-white rounded-full bg-gray-400 w-fit p-2 hover:bg-pink-600 transition-colors duration-200">
                                <FaInstagram />
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 md:mb-0 col-span-1 py-5">
                        <h3 className="font-bold text-2xl text-white mb-4">Quick Links</h3>
                        <ul className="flex flex-col gap-2">
                            <Link href={"/"}><li className="text-white/60 hover:underline">Home</li></Link>
                            <Link href={"/tutors"}><li className="text-white/60 hover:underline">Tutors</li></Link>
                            <Link href={"/add-tutor"}><li className="text-white/60 hover:underline">Add Tutors</li></Link>
                            <Link href={"/my-booked-session"}><li className="text-white/60 hover:underline">My Booked Sessions</li></Link>
                        </ul>
                    </div>

                    <div className="col-span-1 py-5">
                        <h3 className="font-bold text-2xl text-white mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="text-white/60"><span className="font-semibold text-white/80">Email:</span> support@mediqueue.com</li>
                            <li className="text-white/60"><span className="font-semibold text-white/80">Contact:</span> +8801234567</li>
                            <li className="text-white/60">Mon-Sat 9AM-6PM BST</li>
                        </ul>
                    </div>
                </div>

                <hr className="text-gray-700 pb-5" />

                <div className="flex justify-between flex-col md:flex-row gap-4">
                    <h4 className="text-white/80 font-medium whitespace-nowrap">&copy; 2026 MediQueue. All rights reserved.</h4>

                    <div>
                        <ul className="flex justify-between gap-4">
                            <li className="text-white/80">Privacy Policy</li>
                            <li className="text-white/80">Terms of Service</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;