import React from "react";
import Button from "../ui/Button";
import NavLinks from "./NavLinks";
function Header() {
  return (
    <>
      <header className="bg-bluee text-white fixed top-0 left-0 right-0 w-full h-16 flex items-center justify-between px-3 shadow z-50">
        {/* Brand */}
        <div className="font-bold text-2xl tracking-wide">OneVarsity</div>

        <div className="flex items-center space-x-4">  <NavLinks />
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile avatar"
            className="h-10 w-10 rounded-full border-2" />
        </div>
      </header>
    </>

  );
}

export default Header;
