import React, { useState } from "react";
import { Menu } from "lucide-react";
import NavLinks from "./NavLinks";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-bluee text-white fixed top-0 left-0 right-0 w-full h-16 flex items-center justify-between px-3 shadow z-50">
        {/* Brand */}
        <div className="font-bold text-2xl tracking-wide">OneVarsity</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLinks />
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile avatar"
            className="h-10 w-10 rounded-full border-2"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu />


          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bluee text-white mt-16">
          <NavLinks />
        </div>
      )}
    </>
  );
}

export default Header;
