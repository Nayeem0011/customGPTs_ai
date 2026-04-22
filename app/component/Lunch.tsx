// 'use client'
// import { useState } from 'react'

// const tabs = ['Connect data', 'Customize', 'Deploy']

// export default function LaunchSteps() {
//   const [active, setActive] = useState(0)

//   return (
//     <section className="w-full flex flex-col items-center py-20 px-6 bg-[#eceef5]">

//       {/* Heading */}
//       <h2 className="text-center mb-3 text-[48px] font-medium leading-[130%] tracking-[0px]" style={{ width: '677px', fontFamily: 'Geist' }}>
//   <span className="text-[#1a1a2e]">Launch in 3 </span>
//   <span className="text-[#9ba3c4]">streamlined steps</span>
// </h2>

//       {/* Subtext */}
//      <p className="text-center mb-8 font-normal text-[18px] leading-[140%] tracking-[0px]" style={{ fontFamily: 'Geist', color: '#4a6bdc' }}>
//   No coding required &nbsp;-&nbsp; No engineering costs
// </p>

//       {/* Tabs */}
//       <div className="flex mb-16 rounded-full  bg-white border border-[#e0e2ed]">
//         {tabs.map((tab, i) => (
//           <button
//             key={tab}
//             onClick={() => setActive(i)}
//             className={`px-9 py-4 rounded-full text-[16px] transition-all border-none cursor-pointer
//               ${active === i
//                 ? 'bg-white text-[#1a1a2e] font-semibold shadow-md'
//                 : 'bg-transparent text-[#7b82a8] font-normal'
//               }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Big Card */}
//       <div
//         className="w-full max-w-[1060px] rounded-3xl flex flex-col items-center pt-14 pb-10 px-8 min-h-[600px]"
//         style={{
//           background: 'linear-gradient(135deg, #c5cfe8 0%, #cec5e0 35%, #ddc5cc 65%, #c8cde8 100%)',
//         }}
//       >
//         {/* Card Title */}
//         <h3 className="text-[36px] font-semibold text-white text-center leading-[1.2] mb-3">
//           Connect to all your knowledge<br />
//           with 1-click integrations
//         </h3>
//         <p className="text-center text-[15px] text-white/85 mb-10">
//           Make your information accessible with 1400+ supported<br />
//           file types and dozens of integrations
//         </p>

//         {/* App Window */}
//         <div className="w-full max-w-[440px] rounded-2xl overflow-hidden bg-white/90 backdrop-blur-md">

//           {/* App Header */}
//           <div className="flex items-center justify-center gap-2 py-4 border-b border-black/5">
//             <div className="w-7 h-7 rounded-lg bg-[#4a6bdc] flex items-center justify-center">
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                 <circle cx="7" cy="7" r="5" stroke="white" strokeWidth="1.5"/>
//                 <path d="M5 7l1.5 1.5L9 5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
//               </svg>
//             </div>
//             <span className="font-semibold text-sm text-[#1a1a2e]">CustomGPT.ai</span>
//           </div>

//           {/* New Agent Button */}
//           <div className="px-5 py-3">
//             <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium bg-[#f0f2fa]/90 text-[#3a3a5a] border border-[#b4b9d2]/40">
//               <span className="text-lg leading-none">+</span>
//               New Agent
//             </button>
//           </div>

//           {/* Menu Items */}
//           {[
//             { label: 'Dashboard', icon: '▦' },
//             { label: 'Agents', icon: '◈' },
//             { label: 'Resources', icon: '⊕' },
//             { label: 'Slack Community', icon: '✦' },
//           ].map((item) => (
//             <div
//               key={item.label}
//               className="flex items-center gap-3 mx-4 mb-2 px-4 py-3 rounded-xl text-sm bg-[#f0f2fa]/70 text-[#2a2a3a] border border-[#b4b9d2]/20"
//             >
//               <span className="text-sm text-[#5a6080]">{item.icon}</span>
//               {item.label}
//             </div>
//           ))}
//           <div className="pb-2" />
//         </div>
//       </div>

//       {/* See All Button */}
//       <button className="mt-8 px-8 py-3 rounded-full text-sm font-medium bg-white border border-[#d0d4e8] text-[#3a3a5a] cursor-pointer hover:bg-gray-50 transition-colors">
//         See all 100+ integrations
//       </button>

//     </section>
//   )
// }



'use client'
import { useState } from 'react'

const tabs = ['Connect data', 'Customize', 'Deploy']

export default function LaunchSteps() {
  const [active, setActive] = useState(0)

  return (
    <section className="w-full flex flex-col items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#eceef5]">

      {/* Heading */}
      <h2
        className="text-center mb-3 font-medium leading-[130%] tracking-[0px] w-full max-w-[677px]"
        style={{
          fontFamily: 'Geist, sans-serif',
          fontSize: 'clamp(28px, 5vw, 48px)',
        }}
      >
        <span className="text-[#1a1a2e]">Launch in 3 </span>
        <span className="text-[#9ba3c4]">streamlined steps</span>
      </h2>

      {/* Subtext */}
      <p
        className="text-center mb-8 font-normal leading-[140%] tracking-[0px]"
        style={{
          fontFamily: 'Geist, sans-serif',
          color: '#4a6bdc',
          fontSize: 'clamp(15px, 2.5vw, 18px)',
        }}
      >
        No coding required&nbsp;-&nbsp;No engineering costs
      </p>

      {/* Tabs */}
      <div className="flex mb-10 sm:mb-12 md:mb-16 rounded-full bg-white border border-[#e0e2ed] overflow-x-auto max-w-full">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`px-5 sm:px-7 md:px-9 py-3 sm:py-4 rounded-full transition-all border-none cursor-pointer whitespace-nowrap
              ${active === i
                ? 'bg-white text-[#1a1a2e] font-semibold shadow-md'
                : 'bg-transparent text-[#7b82a8] font-normal'
              }`}
            style={{ fontSize: 'clamp(13px, 2vw, 16px)' }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Big Card WITH bg2.png */}
      <div
        className="w-full max-w-[1060px] rounded-2xl sm:rounded-3xl flex flex-col items-center pt-8 sm:pt-10 md:pt-14 pb-8 sm:pb-10 px-4 sm:px-6 md:px-8 min-h-[500px]"
        style={{
          backgroundImage: "url('/bg2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Card Title */}
        <h3
          className="font-semibold text-white text-center leading-[1.2] mb-3"
          style={{ fontSize: 'clamp(22px, 4vw, 36px)' }}
        >
          Connect to all your knowledge<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          with 1-click integrations
        </h3>

        <p
          className="text-center text-white/85 mb-8 sm:mb-10 px-2"
          style={{ fontSize: 'clamp(13px, 2vw, 15px)' }}
        >
          Make your information accessible with 1400+ supported<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          file types and dozens of integrations
        </p>

        {/* App Window */}
        <div className="w-full max-w-[440px] rounded-xl sm:rounded-2xl overflow-hidden bg-white/90 backdrop-blur-md">

          {/* App Header */}
          <div className="flex items-center justify-center gap-2 py-3 sm:py-4 border-b border-black/5">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#4a6bdc] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="5" stroke="white" strokeWidth="1.5"/>
                <path d="M5 7l1.5 1.5L9 5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-semibold text-xs sm:text-sm text-[#1a1a2e]">CustomGPT.ai</span>
          </div>

          {/* New Agent Button */}
          <div className="px-4 sm:px-5 py-2 sm:py-3">
            <button className="w-full flex items-center justify-center gap-2 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium bg-white text-[#3a3a5a] border border-[#d0d4e8]">
              <span className="text-base sm:text-lg leading-none">+</span>
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
              className="flex items-center gap-3 mx-3 sm:mx-4 mb-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm bg-white text-[#2a2a3a] border border-[#e0e2ed]"
            >
              <span className="text-xs sm:text-sm text-[#5a6080]">{item.icon}</span>
              {item.label}
            </div>
          ))}

          <div className="pb-2" />
        </div>
      </div>

      {/* See All Button */}
      <button
        className="mt-6 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium bg-white border border-[#d0d4e8] text-[#3a3a5a] cursor-pointer hover:bg-gray-50 transition-colors"
        style={{ fontSize: 'clamp(12px, 2vw, 14px)' }}
      >
        See all 100+ integrations
      </button>

    </section>
  )
}