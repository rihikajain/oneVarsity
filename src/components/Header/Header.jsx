import React from "react";
import { BookOpen } from "lucide-react";
export default function Header() {
  return (
    <>
      <header className="bg-blue-600 text-white fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 py-3 shadow-md">
        <div className="flex items-center space-x-2 cursor-pointer">
          {/* <BookOpen size={28} className="text-white" /> */}
          <span className="text-2x1 font-bold tracking-wide">OneVaristy</span>
        </div>
        <nav className="flex space-x-6 font-semibold">
          <a href="#" className="hover:text-under"> Home </a>
          <a href="#" className="hover:text-black"> LMS </a>
          <a href="#" className="hover:text-black"> Dashboard </a>
          <a href="#" className="hover:text-black"> Career </a>
          <a href="#" className="hover:text-black"> MyApp </a>
          <a href="#" className="hover:text-black"> AppStore </a>
          <a href="#" className="hover:text-black"> AIBot </a>
        </nav>

        <div>

        </div>
      </header>
    </>
  )

}

