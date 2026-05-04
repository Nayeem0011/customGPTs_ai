"use client";

import React, { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="w-full flex flex-col items-center text-center px-2 py-3 md:px-6 md:py-6 relative">
      
      {/* NavBar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/Logo.svg.png" alt="" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7 font-medium text-sm">
          <li><a href="#" className="text-white hover:text-gray-300">Product</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Solutions</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Pricing</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Customers</a></li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center gap-3">
          <button className="rounded-xl bg-white px-6 py-2.5 hover:bg-gray-50 font-medium text-sm text-[#4A4A59] border border-gray-300/50">
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

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Right Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-[#111] transform transition-transform duration-300 z-40 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6 gap-6">

          <ul className="flex flex-col gap-5 text-left font-medium text-sm mt-10">
            <li><a href="#" className="text-white hover:text-gray-300">Product</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Solutions</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Pricing</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Customers</a></li>
          </ul>

          <button className="mt-auto w-full rounded-xl bg-white px-6 py-3 hover:bg-gray-50 font-medium text-sm text-[#4A4A59] border border-gray-300/50">
            Try for free
          </button>
        </div>
      </div>

    </section>
  )
}