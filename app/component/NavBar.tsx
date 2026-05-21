"use client";

import React, { useEffect, useState } from 'react'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // scroll down
      setShowNav(false)
    } else {
      // scroll up
      setShowNav(true)
    }

    // Background add/remove
    if (window.scrollY > 20) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }

    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar)
    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

  return (
    // <section className="w-full flex flex-col items-center text-center px-2 py-3 md:px-6 md:py-6 relative">
    <section >
      <div className={`fixed top-0 left-0 z-40 w-full flex flex-col items-center text-center px-2 py-0 md:py-3 transition-all duration-500
        ${showNav ? "translate-y-0" : "-translate-y-full"}
        ${scrolled || menuOpen
          ? "bg-black/10 backdrop-blur-xl"
          : "bg-transparent"
        }`}
      >
        {/* NavBar */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/Logo.svg.png" alt="" />
          </div>
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-7 font-medium text-sm">
            <li><a href="#" className="font-geist text-white hover:text-gray-300">Product</a></li>
            <li><a href="#" className="font-geist text-white hover:text-gray-300">Solutions</a></li>
            <li><a href="#" className="font-geist text-white hover:text-gray-300">Pricing</a></li>
            <li><a href="#" className="font-geist text-white hover:text-gray-300">Customers</a></li>
          </ul>
          {/* Desktop Button */}
          <div className="hidden md:flex items-center gap-3">
            <button className="rounded-xl bg-white px-6 py-2.5 hover:bg-gray-50 font-geist font-medium text-sm text-[#4A4A59] border border-gray-300/50 cursor-pointer">
              Try for free
            </button>
          </div>
          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>
      {/* Overlay */}
      <div className={`fixed inset-0 bg-black/50 w-full h-screen backdrop-blur-sm z-30 transition-all duration-300 
      ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMenuOpen(false)}
      />
      {/* Right Side Drawer */}
      <div className={`fixed top-0 right-0 h-screen w-[80%] max-w-[320px] bg-[#18181B] border-l border-white/10 z-30 transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full p-6 gap-6">
          <ul className="flex flex-col gap-5 text-left font-medium text-sm mt-16">
            <li><a href="#" className="font-geist text-white hover:text-gray-300">Product</a></li>
            <li><a href="#" className="font-geist text-white hover:text-gray-300">Solutions</a></li>
            <li><a href="#" className="font-geist text-white hover:text-gray-300">Pricing</a></li>
            <li><a href="#" className="font-geist text-white hover:text-gray-300">Customers</a></li>
          </ul>
          <button className="mt-auto w-full rounded-xl bg-white px-6 py-3 hover:bg-gray-50 font-geist font-medium text-sm text-[#4A4A59] border border-gray-300/50 cursor-pointer">
            Try for free
          </button>
        </div>
      </div>
    </section>
  )
}

export default NavBar
