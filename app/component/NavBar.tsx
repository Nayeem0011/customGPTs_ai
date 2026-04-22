// import React from 'react'

// export default function Home() {
//   return (
//     <section className="w-full flex flex-col items-center justify-start text-center px-6 py-6">
//       {/* NavBar */}
//       <div className="max-w-7xl mx-auto w-full px-8 h-16 flex items-center justify-between">
//         <div className="flex items-center gap-17.5">
//           <div className="flex items-center gap-2">
//             <img src="/Logo.svg.png" alt="" />
//           </div>
//           <ul
//             className="flex items-center gap-7"
//             style={{ fontFamily: 'Geist', fontWeight: 500, fontSize: '14px', lineHeight: '140%' }}
//           >
//             <li><a href="#" className="text-white hover:text-gray-300">Product</a></li>
//             <li><a href="#" className="text-white hover:text-gray-300">Solutions</a></li>
//             <li><a href="#" className="text-white hover:text-gray-300">Pricing</a></li>
//             <li><a href="#" className="text-white hover:text-gray-300">Customers</a></li>
//           </ul>
//         </div>
//         <div className="flex items-center gap-3">
//           <button
//             className="rounded-xl bg-white px-8 py-3.5 hover:bg-gray-50 font-medium text-base leading-[120%] tracking-[-0.13px] text-[#4A4A59]"
//             style={{ border: '1px solid rgba(203, 203, 203, 0.5)', fontFamily: 'Geist' }}
//           >
//             Try for free
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }




"use client";

import React, { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="w-full flex flex-col items-center justify-start text-center px-6 py-6">
      {/* NavBar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/Logo.svg.png" alt="" />
        </div>

        {/* Desktop Nav */}
        <ul
          className="hidden md:flex items-center gap-7"
          style={{ fontFamily: 'Geist', fontWeight: 500, fontSize: '14px', lineHeight: '140%' }}
        >
          <li><a href="#" className="text-white hover:text-gray-300">Product</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Solutions</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Pricing</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Customers</a></li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="rounded-xl bg-white px-8 py-3.5 hover:bg-gray-50 font-medium text-base leading-[120%] tracking-[-0.13px] text-[#4A4A59]"
            style={{ border: '1px solid rgba(203, 203, 203, 0.5)', fontFamily: 'Geist' }}
          >
            Try for free
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full max-w-7xl mx-auto px-4 pb-4 flex flex-col gap-4">
          <ul
            className="flex flex-col gap-4 pt-4 border-t border-white/20"
            style={{ fontFamily: 'Geist', fontWeight: 500, fontSize: '14px', lineHeight: '140%' }}
          >
            <li><a href="#" className="text-white hover:text-gray-300">Product</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Solutions</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Pricing</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Customers</a></li>
          </ul>
          <button
            className="w-full rounded-xl bg-white px-8 py-3.5 hover:bg-gray-50 font-medium text-base leading-[120%] tracking-[-0.13px] text-[#4A4A59]"
            style={{ border: '1px solid rgba(203, 203, 203, 0.5)', fontFamily: 'Geist' }}
          >
            Try for free
          </button>
        </div>
      )}
    </section>
  )
}