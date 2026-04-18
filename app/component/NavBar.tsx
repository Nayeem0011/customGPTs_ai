

import React from 'react'

export default function Home() {
  return (
  <div
  className="w-full flex flex-col items-center justify-start text-center px-6 py-6"
  style={{
    backgroundImage: 'url("/background_1.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight: '1324px',
  }}
>
      {/* NavBar */}
      <section className="max-w-7xl mx-auto w-full px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-[70px]">
          <div className="flex items-center gap-2">
            <img src="/Logo.svg.png" alt="" />
          </div>
          <ul
            className="flex items-center gap-7"
            style={{ fontFamily: 'Geist', fontWeight: 500, fontSize: '14px', lineHeight: '140%' }}
          >
            <li><a href="#" className="text-white hover:text-gray-300">Product</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Solutions</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Pricing</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Customers</a></li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="rounded-[12px] bg-white px-8 py-3.5 hover:bg-gray-50 font-medium text-base leading-[120%] tracking-[-0.13px] text-[#4A4A59]"
            style={{ border: '1px solid rgba(203, 203, 203, 0.5)', fontFamily: 'Geist' }}
          >
            Try for free
          </button>
        </div>
      </section>

      {/* Hero Content */}
      <div className="flex flex-col items-center pt-24">
        <p className="text-white uppercase text-center font-normal text-base leading-[140%] tracking-normal" style={{ fontFamily: 'Geist' }}>
          #1 AI AGENT FOR BUSINESSES
        </p>

        <h1 className="text-[clamp(40px,7vw,80px)] leading-[1.1] text-white max-w-6xl mb-6">
          <span className="font-bold">Create </span>
          
          <span className="font-normal">CustomGPTs </span>
          <span className="font-bold">from your business information</span>
        </h1>

        <p
          className="font-normal text-white mb-8 text-center leading-[140%] tracking-[-0.7px]"
          style={{ fontFamily: 'Geist', fontSize: '24px' }}
        >
          Launch in minutes with 100+ data sources and deployment options
        </p>

        <div className="flex items-center gap-4 mb-10 flex-wrap justify-center">
          <div className="flex items-center gap-3 rounded-[10px] border border-white/20 px-4 py-3 text-white text-sm">
            <img src="/icon.png" alt="check" className="w-4 h-4" />
            Industry-leading accuracy
          </div>
          <div className="flex items-center gap-3 rounded-[10px] border border-white/20 px-4 py-3 text-white text-sm">
            <img src="/icon_2.png" alt="shield" className="w-4 h-4" />
            Zero data sharing & training
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <button
            className="rounded-[12px] px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
            style={{
              background: 'radial-gradient(114.65% 114.65% at 9.73% 17.27%, #1E82E0 0%, #1C38EA 100%)',
              boxShadow: '4px 4px 4px 0px #131AE41A inset, -3px -3px 4px 0px #BFE5FB66 inset',
            }}
          >
            Sign up free
          </button>
          <button
            className="rounded-[12px] px-[32px] py-[14px] text-base font-semibold text-[#4A4A59] bg-white hover:bg-gray-50 transition-colors"
            style={{ border: '1px solid rgba(203, 203, 203, 0.5)' }}
          >
            Chat with the AI
          </button>
        </div>
      </div>
    </div>
  )
}