import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar"
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
import { ThemeProvider } from 'next-themes'

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "MediQueue - Tutor Booking System",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute={"class"} defaultTheme="system">
          <ToastContainer />
          <Navbar />
          <main className="bg-[#ede9fe] dark:bg-black/70">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
