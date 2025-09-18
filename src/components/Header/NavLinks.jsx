import React from "react"

export default function NavLinks() {
  return (
    <nav className="flex flex-col md:flex-row md:space-x-6 font-medium p-4 md:p-0">
      <a href="#" className="hover:text-black py-2 md:py-0">Home</a>
      <a href="#" className="hover:text-black py-2 md:py-0">LMS</a>
      <a href="#" className="hover:text-black py-2 md:py-0">Community</a>
      <a href="#" className="hover:text-black py-2 md:py-0">Dashboard</a>
      <a href="#" className="hover:text-black py-2 md:py-0">Career</a>
      <a href="#" className="hover:text-black py-2 md:py-0">MyApp</a>
      <a href="#" className="hover:text-black py-2 md:py-0">AppStore</a>
      <a href="#" className="hover:text-black py-2 md:py-0">AI Bot</a>
    </nav>
  )
}