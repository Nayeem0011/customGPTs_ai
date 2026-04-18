'use client'
import { useState } from 'react'

const tabs = ['Connect data', 'Customize', 'Deploy']

export default function LaunchSteps() {
  const [active, setActive] = useState(0)

  return (
    <section className="w-full flex flex-col items-center py-20 px-6 bg-[#eceef5]">

      {/* Heading */}
      <h2 className="text-center mb-3 text-[48px] font-medium leading-[130%] tracking-[0px]" style={{ width: '677px', fontFamily: 'Geist' }}>
  <span className="text-[#1a1a2e]">Launch in 3 </span>
  <span className="text-[#9ba3c4]">streamlined steps</span>
</h2>

      {/* Subtext */}
     <p className="text-center mb-8 font-normal text-[18px] leading-[140%] tracking-[0px]" style={{ fontFamily: 'Geist', color: '#4a6bdc' }}>
  No coding required &nbsp;-&nbsp; No engineering costs
</p>

      {/* Tabs */}
      <div className="flex mb-16 rounded-full  bg-white border border-[#e0e2ed]">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`px-9 py-4 rounded-full text-[16px] transition-all border-none cursor-pointer
              ${active === i
                ? 'bg-white text-[#1a1a2e] font-semibold shadow-md'
                : 'bg-transparent text-[#7b82a8] font-normal'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Big Card */}
      <div
        className="w-full max-w-[1060px] rounded-3xl flex flex-col items-center pt-14 pb-10 px-8 min-h-[600px]"
        style={{
          background: 'linear-gradient(135deg, #c5cfe8 0%, #cec5e0 35%, #ddc5cc 65%, #c8cde8 100%)',
        }}
      >
        {/* Card Title */}
        <h3 className="text-[36px] font-semibold text-white text-center leading-[1.2] mb-3">
          Connect to all your knowledge<br />
          with 1-click integrations
        </h3>
        <p className="text-center text-[15px] text-white/85 mb-10">
          Make your information accessible with 1400+ supported<br />
          file types and dozens of integrations
        </p>

        {/* App Window */}
        <div className="w-full max-w-[440px] rounded-2xl overflow-hidden bg-white/90 backdrop-blur-md">

          {/* App Header */}
          <div className="flex items-center justify-center gap-2 py-4 border-b border-black/5">
            <div className="w-7 h-7 rounded-lg bg-[#4a6bdc] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="5" stroke="white" strokeWidth="1.5"/>
                <path d="M5 7l1.5 1.5L9 5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-semibold text-sm text-[#1a1a2e]">CustomGPT.ai</span>
          </div>

          {/* New Agent Button */}
          <div className="px-5 py-3">
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium bg-[#f0f2fa]/90 text-[#3a3a5a] border border-[#b4b9d2]/40">
              <span className="text-lg leading-none">+</span>
              New Agent
            </button>
          </div>

          {/* Menu Items */}
          {[
            { label: 'Dashboard', icon: '▦' },
            { label: 'Agents', icon: '◈' },
            { label: 'Resources', icon: '⊕' },
            { label: 'Slack Community', icon: '✦' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 mx-4 mb-2 px-4 py-3 rounded-xl text-sm bg-[#f0f2fa]/70 text-[#2a2a3a] border border-[#b4b9d2]/20"
            >
              <span className="text-sm text-[#5a6080]">{item.icon}</span>
              {item.label}
            </div>
          ))}
          <div className="pb-2" />
        </div>
      </div>

      {/* See All Button */}
      <button className="mt-8 px-8 py-3 rounded-full text-sm font-medium bg-white border border-[#d0d4e8] text-[#3a3a5a] cursor-pointer hover:bg-gray-50 transition-colors">
        See all 100+ integrations
      </button>

    </section>
  )
}


