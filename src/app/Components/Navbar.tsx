"use client"
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = "/your-cv.pdf"
    link.download = "your-cv.pdf"
    link.click()
  }

  return (
    <header className="text-gray-600 py-2 body-font bg-black">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 ml-6 md:mb-0">
          <span className="ml-3 text-xl pl-4 sm:text-2xl md:text-3xl text-red-500">ReXon Solution</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center pr-6 text-white">
          <Link href="/" className="mr-5 hover:text-gray-900 rounded hover:bg-white p-1 px-3 hover:text-black">Home</Link>
          <Link href="/about" className="mr-5 hover:text-gray-900 rounded hover:bg-white p-1 px-3 hover:text-black">About Us</Link>
          <Link href="/Portfolio" className="mr-5 hover:text-gray-900 rounded hover:bg-white p-1 px-3 hover:text-black">Portfolio</Link>
          {/* <Link href="/WorkingProject" className="mr-5 hover:text-gray-900 rounded hover:bg-white p-1 px-3 hover:text-black">Working Project</Link> */}
          <Link href="/DownloadCv" onClick={handleDownload} className="mr-5 hover:text-gray-900 rounded hover:bg-white p-1 px-3 hover:text-black cursor-pointer">Download CV</Link>
          <Link href="/Contact" className="mr-5 text-sm sm:text-base px-2 sm:px-4 bg-green-500 py-1 text-red-500 rounded hover:bg-red-900 hover:text-white">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
